import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Module, Controller, Get, Post, Body } from '@nestjs/common';
import { RenderJobWorker } from './queue/render_job_worker';
import { ResultUploader } from './uploader/result_uploader';

@Controller('render')
class RenderController {
  private renderWorker = new RenderJobWorker();
  private uploader = new ResultUploader();

  @Post('start')
  async startRender(@Body() body: { projectId: string; scenes: any[]; resolution?: string }) {
    try {
      const outputPath = await this.renderWorker.processJob({
        projectId: body.projectId,
        scenes: body.scenes,
        resolution: body.resolution || '720p',
      });

      const videoUrl = await this.uploader.uploadRenderedVideo(outputPath, body.projectId);

      return {
        status: 'success',
        message: 'Video rendered and uploaded successfully',
        videoUrl,
      };
    } catch (error: any) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  }
}

@Controller('health')
class HealthController {
  @Get()
  check() {
    return { status: 'Service Render Engine is up and running', timestamp: new Date().toISOString() };
  }
}

@Module({
  controllers: [HealthController, RenderController],
  providers: [RenderJobWorker, ResultUploader],
})
class StandaloneRenderModule {}

async function bootstrap() {
  const app = await NestFactory.create(StandaloneRenderModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const port = process.env.PORT || 4005;
  await app.listen(port);
  console.log(`🎬 Service Render Engine microservice running on port ${port}`);
}

bootstrap();
