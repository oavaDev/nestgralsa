import {Body, Controller, Get, Post} from '@nestjs/common';
import { RoleService } from './role.service';
import {RoleEntity} from "./entities/role.entity";
import {CreateRoleDto} from "./dto/create-role.dto";
import {ApiTags} from "@nestjs/swagger";
@ApiTags('role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
  @Get()
  async getAllRoles() {
      return await this.roleService.getAllRoles();
  }
  @Post()
  async createRole(@Body() createRoleDto:CreateRoleDto): Promise<RoleEntity> {
    return await this.roleService.create(createRoleDto);
  }
}
