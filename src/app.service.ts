import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public getDetail(): string {
    return "Here are ZOO details";
  }

  public getDetailInfo(): string {
    return "We will discuss about Detail Infos here!";
  }
}
