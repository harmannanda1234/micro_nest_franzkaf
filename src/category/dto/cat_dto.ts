import { IsInt, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class Cat{
    @IsString()
    name :string;
    @IsInt()
    class: number;
    @IsInt()
    roll?: number;
}