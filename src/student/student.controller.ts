/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('student')
export class StudentController {
    constructor (private readonly stuservice : StudentService){}

    @Get('/all')
    @UseGuards(AuthGuard)
    getstudents(){
        return this.stuservice.getallstudents()
    }
}
