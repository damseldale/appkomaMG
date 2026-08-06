import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Module, Controller, Get } from '@nestjs/common';

// Kontroler pengecekan kesehatan layanan (Health Check)
@Controller('health')
class HealthController {
  @Get()
  check() {
    return { status: 'Service Users is up and running', timestamp: new Date().toISOString() };
  }
}

@Module({
  controllers: [HealthController],
})
class StandaloneUserModule {}

async function bootstrap() {
  const app = await NestFactory.create(StandaloneUserModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const port = process.env.PORT || 4001;
  await app.listen(port);
  console.log(`👤 Service Users microservice running on port ${port}`);
}

bootstrap();
