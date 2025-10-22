/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmpService } from './emp.service';
import { EmpController } from './emp.controller';

@Module({
  providers: [EmpService],
  controllers: [EmpController]
})
export class EmpModule {}
