/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/use')
  @UseGuards(AuthGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
