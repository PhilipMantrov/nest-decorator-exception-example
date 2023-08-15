import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import {
  addReflectionToGrpcConfig,
  GrpcReflectionModule,
} from 'nestjs-grpc-reflection';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { TEST_PACKAGE_NAME } from '../../definitions/generated/test/test';
import { join } from 'path';

export const TestGrpcOptions: GrpcOptions = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url: `0.0.0.0:9090`,
    package: TEST_PACKAGE_NAME,
    protoPath: join(`test/test.proto`),
    maxSendMessageLength: 30 * 1024 * 1024,
    maxReceiveMessageLength: 30 * 1024 * 1024,
    loader: {
      arrays: true,
      objects: true,
      keepCase: true,
      includeDirs: [`definitions/protocol-buffers`],
    },
  },
});

@Module({
  imports: [GrpcReflectionModule.register(TestGrpcOptions)],
  controllers: [TestController],
})
export class TestModule {}
