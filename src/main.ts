import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {ValidationPipe} from "@nestjs/common";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('GRALCO NESTJS API')
      .setDescription('GRALCO SA API')
      .setVersion('1.0')
      .addBearerAuth()
      .addTag('gralco')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
      new ValidationPipe({ whitelist: true }),
  );
  app.enableCors()
  await app.listen(3000);
}
bootstrap();
