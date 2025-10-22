/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {

    private arr =[
        {"id":1,"name":"harman"},
        {"id":2,"name":"haan"},
        {"id":3,"name":"haran"},
    ]
    getcategory(){
        return this.arr;
    }
}
