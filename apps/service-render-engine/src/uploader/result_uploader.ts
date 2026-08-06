import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ResultUploader {
  private s3Client: S3Client;
  private bucketName: string;

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'mock_access_key',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'mock_secret_key',
      },
    });
    this.bucketName = process.env.AWS_S3_BUCKET_NAME || 'animaker-renders-bucket';
  }

  async uploadRenderedVideo(filePath: string, projectId: string): Promise<string> {
    if (!fs.existsSync(filePath)) {
      throw new Error(`Rendered video file not found at path: ${filePath}`);
    }

    const fileStream = fs.createReadStream(filePath);
    const fileName = `renders/${projectId}-${uuidv4()}.mp4`;

    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: fileName,
      Body: fileStream,
      ContentType: 'video/mp4',
    });

    await this.s3Client.send(command);

    // Hapus file sementara dari direktori lokal server setelah berhasil diunggah
    try {
      fs.unlinkSync(filePath);
    } catch (err) {
      console.error(`Failed to clean up local file ${filePath}:`, err);
    }

    return `https://${this.bucketName}.s3.amazonaws.com/${fileName}`;
  }
}
