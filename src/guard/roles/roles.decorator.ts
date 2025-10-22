/* eslint-disable prettier/prettier */
import { SetMetadata } from "@nestjs/common";

export const Roles_key = "roles";

export const Role =(...roles:string[])=> SetMetadata(Roles_key,roles);