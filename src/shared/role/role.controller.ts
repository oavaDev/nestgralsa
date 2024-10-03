import {Body, Controller, Get, Post} from '@nestjs/common';
import { RoleService } from './role.service';
import {RoleEntity} from "./entities/role.entity";
import {CreateRoleDto} from "./dto/create-role.dto";
import {ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../utils/shared/response.util";
import {ResponseEntity} from "../entity/response.entity";
@ApiTags('role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
  @Get()
  async getAllRoles(): Promise<ResponseEntity> {
      return createResponse(await this.roleService.getAllRoles(), "Roles encontrados", 200);
  }
  @Post()
  async createRole(@Body() createRoleDto:CreateRoleDto): Promise<ResponseEntity> {
    const data = await this.roleService.create(createRoleDto);
    return createResponse(data, "Rol creado con éxito", 201);
  }
}
