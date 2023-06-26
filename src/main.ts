import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllResponseInterceptor } from './all-response.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { AnyExcptionFilter } from './any-excption.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 使用自定义全局拦截对数据做处理
  app.useGlobalInterceptors(new AllResponseInterceptor)
  app.useGlobalPipes(new ValidationPipe)
  app.useGlobalFilters(new AnyExcptionFilter) // 对服务器异常统一处理
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
