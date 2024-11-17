import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import { query, Request, Response } from 'express';

@Controller('dog')
export class DogController {
    constructor(private readonly dogService: DogService) {}

    @Get()
    public getHello(): string {
        return this.dogService.getHello()
    };

    @Get('greet/:id/')
    public getIntroduce(@Param("id") params: any, @Query() query: any): string {
        console.log("id:", params);
        console.log("query:", query);
        // console.log("query:", request.query);

        return this.dogService.getIntroduce();
    };

    @Post('edit')
    public modifyDetail(@Body() body: any): string {
        console.log("body:", body);

        return this.dogService.modifyDetail();
    };
}
