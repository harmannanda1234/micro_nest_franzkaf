import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students=[
        {name:"harmn singh"},
        {name:"tanya bajwa"}
    ]
    getallstudents(){
        return this.students
    }
}
