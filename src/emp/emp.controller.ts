/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { EmpService } from './emp.service';

@Controller('emp')
export class EmpController {
    constructor( private readonly emp : EmpService ){}

    @Get('/details/:id')
    getEmp(@Param('id') id:string){
        return this.emp.getdetails(Number(id))
    }

}
