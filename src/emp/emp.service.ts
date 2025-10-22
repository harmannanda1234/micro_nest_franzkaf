/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmpService {
    getdetails(id:number){
        return {
            status:201,
            name:"harman",
            id
        }
    }
}
