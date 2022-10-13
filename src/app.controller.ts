import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post("list")
  create():string {
    return "create"
  }
  @Get("user_*")
  getUser(): string {
    return "user 通配符";
  }
  @Put("list/:id")
  update(){
    return "update"
  }
  @Put("list/user")
  updateUser(){
    return {userId:1}
  }
}
