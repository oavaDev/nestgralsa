import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import {JwtAuthGuard} from "../../security/authentication/guards/jwt.guard"
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthChangePasswordDTO} from "../../security/authentication/interfaces/authChangePassword.entity";
import {createResponse} from "../../utils/shared/response.util";
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    try {
      const data = await this.userService.findAll();
      return {
        message: 'Usuarios encontrados',
        data: data,
        success: true,
      };
    } catch (error) {
      return {
        message: 'Error al obtener los usuarios',
        error: error.message,
        success: false,
      };
    }
  }
  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.userService.findByNIde(id);
      if (data){
        return createResponse(data, 'Usuario encontrado', 200);
      }else{
        return createResponse({}, 'Usuario no encontrado', 404);
      }
    }catch (error){
        return createResponse({}, 'Error al obtener el usuario', 500);
    }
  }
}