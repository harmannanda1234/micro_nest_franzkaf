/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private arr= [
        {"id":1,"name":"mc-laren","price":20000},
        {"id":2,"name":"mc-chi","price":200},
    ]

    getallprod(){
        return {
            prod: this.arr
        }
    }


    getprodbyid(id:number){
        return {
            products: this.arr.find((prod)=>id===prod.id),
            status:200
    }}

}
