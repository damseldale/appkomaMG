import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class S3Service {
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
    this.bucketName = process.env.AWS_S3_BUCKET_NAME || 'animaker-assets-bucket';
  }

  async uploadFile(file: Express.Multer.File, folder: string = 'general'): Promise<string> {
    const fileKey = `${folder}/${uuidv4()}-${file.originalname}`;

    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    await this.s3Client.send(command);

    // Kembalikan URL publik objek S3
    return `https://${this.bucketName}.s3.amazonaws.com/${fileKey}`;
  }
}
