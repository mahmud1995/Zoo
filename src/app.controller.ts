import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('detail')
  public getDetail(): string {
    return this.appService.getDetail();
  }

  @Get("detail/info")
  public getDetailInfo(): string {
    return this.appService.getDetailInfo();
  }
}
