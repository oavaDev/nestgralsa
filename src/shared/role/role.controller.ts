import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { RoleService } from './role.service';
import {CreateRoleDto} from "./dto/create-role.dto";
import {ApiBearerAuth, ApiCreatedResponse, ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../utils/shared/response.util";
import {ResponseEntity} from "../entity/response.entity";
import {JwtAuthGuard} from "../../security/authentication/guards/jwt.guard";
@ApiTags('role')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
  @Get()
  async getAllRoles(): Promise<ResponseEntity> {
    try {
        return createResponse(await this.roleService.getAllRoles(), "Roles encontrados", 200);
    }catch (e){
        return createResponse([], e.message, 500);
    }
  }
  @Post()
  async createRole(@Body() createRoleDto:CreateRoleDto): Promise<ResponseEntity> {
    try {
        const data = await this.roleService.create(createRoleDto);
        return createResponse(data, "Rol creado con éxito", 201);
    }catch (e){
        return createResponse([], e.message, 500);
    }
  }
}
