import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {

    public getHello(): string {
        return "Myeow!!!";
    };

    public getIntroduce(): string {
        return "My name is TOM!";
    }
}
