import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Module, Controller, Get } from '@nestjs/common';
import { UploadController } from './uploader/upload.controller';
import { S3Service } from './uploader/s3.service';
import { PropService } from './library/prop.service';
import { CharacterService } from './library/character.service';

@Controller('health')
class HealthController {
  @Get()
  check() {
    return { status: 'Service Assets is up and running', timestamp: new Date().toISOString() };
  }
}

@Module({
  controllers: [HealthController, UploadController],
  providers: [S3Service, PropService, CharacterService],
})
class StandaloneAssetModule {}

async function bootstrap() {
  const app = await NestFactory.create(StandaloneAssetModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const port = process.env.PORT || 4003;
  await app.listen(port);
  console.log(`🖼️ Service Assets microservice running on port ${port}`);
}

bootstrap();
