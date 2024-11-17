import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello(): string {
        return "Wow Wow!";
    };

    public getIntroduce(): string {
        return "It is me, Big Dog!";
    };

    public modifyDetail(): string {
        return "Succesfully Modified";
    }
}
