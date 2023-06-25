import {  NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Cats example') // 标题 
    .setDescription('自动生成') // 描述
    .setVersion('1.0') // 版本号
    .addTag('cats') //
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);// 访问文档
  await app.listen(8888);
}
bootstrap();
