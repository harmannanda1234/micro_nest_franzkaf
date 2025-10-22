/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Cat } from './dto/cat_dto';
import { UserPipe } from 'src/common/pipes/user/user.pipe';



// interface name {
//     name:string,
//     class:number,

@Controller('category')
export class CategoryController {
    constructor(private readonly catserv: CategoryService){

    }

    @Get('/all')
    getcat(){
        return this.catserv.getcategory()
    }

    @Post('/all')
    postcategory(@Body()body:Cat){
        console.log("req",body)
        console.log("req",body.class)
        console.log("req",body.name)

        return {status:200,message:"request created"}
    }

    @Post('/username')
    putname(@Body('name', new UserPipe())name :string){
        return name
    }

}
