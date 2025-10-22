/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpModule } from './emp/emp.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [EmpModule, CategoryModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
