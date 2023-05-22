import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
// 中间键
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { method, path } = req;
    console.log(method, path);
    next();
  }
}
