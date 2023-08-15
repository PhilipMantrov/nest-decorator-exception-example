import { NestFactory } from '@nestjs/core';
import { TestGrpcOptions, TestModule } from './test/test.module';

async function bootstrap() {
  const microservice = await NestFactory.createMicroservice(TestModule, {
    ...TestGrpcOptions,
  });
  await microservice.listen();
}

bootstrap();
