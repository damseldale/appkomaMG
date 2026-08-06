import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Module, Controller, Get } from '@nestjs/common';
import { ProjectController } from './projects/project.controller';
import { ProjectService } from './projects/project.service';
import { TemplateController } from './templates/template.controller';
import { TemplateService } from './templates/template.service';

@Controller('health')
class HealthController {
  @Get()
  check() {
    return { status: 'Service Projects is up and running', timestamp: new Date().toISOString() };
  }
}

@Module({
  controllers: [HealthController, ProjectController, TemplateController],
  providers: [
    ProjectService,
    TemplateService,
    // Catatan: Model Mongoose diinjeksikan secara nyata melalui MongooseModule di App Module utama.
  ],
})
class StandaloneProjectModule {}

async function bootstrap() {
  const app = await NestFactory.create(StandaloneProjectModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const port = process.env.PORT || 4002;
  await app.listen(port);
  console.log(`📁 Service Projects microservice running on port ${port}`);
}

bootstrap();
