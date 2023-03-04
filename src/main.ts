import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hero',
        protoPath: join(__dirname, 'hero/hero.proto'),
      },
    },
  );
  // NOTE: portは:5000
  //       https://docs.nestjs.com/microservices/grpc#:~:text=Optional.%20Defaults%20to%20%27localhost%3A5000%27
  await app.listen();
}
bootstrap();
