import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/logger.middleware';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { BooksModule } from './books/books.module';
import { PrismaService } from './prisma/prisma.service';
@Module({
  imports: [BooksModule], // 导入别动模块
  controllers: [AppController, UsersController], //其他 控制器
  providers: [AppService,UsersService, PrismaService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('app');
  }
}
