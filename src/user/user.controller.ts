/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user/hello') //decorator
export class UserController {
    constructor(private readonly UserService: UserService){

    }
    @Get()
    getuser(){
        return this.UserService.getallprod()
    }
    
    @Get('/all/:id')
    getname(@Param('id')id:string){
        return this.UserService.getprodbyid(Number(id))
    }
}
