/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles_key } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector :Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const req_roles = this.reflector.getAllAndOverride<Role[]>(
      Roles_key,[
        context.getHandler(),
        context.getClass()
      ]
    )

    if(!req_roles){
      return false;
    }
    return true;
  }
}
