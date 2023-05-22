import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}
  //查询
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
