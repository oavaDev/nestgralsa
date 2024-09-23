import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import {JwtAuthGuard} from "../../security/authentication/guards/jwt.guard"
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthChangePasswordDTO} from "../../security/authentication/interfaces/authChangePassword.entity";
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
        return {
          message: 'Usuario encontrado',
          data: data,
          success: true,
        };
      }else{
        return {
          message: 'No se encontró el usuario',
          data: data,
          success: true,
        };
      }
    }catch (error){
      return {
        message: 'Error al obtener el usuario',
        error: error.message,
        success: false,
      }
    }
  }
/*  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(
      @Param('id') id: string,
      @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      await this.userService.update(
          id,
          updateUserDto,
      );
      return {
        success: true,
        message: 'UserRoleEntity Updated Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    try {
      await this.userService.remove(id);
      return {
        success: true,
        message: 'UserRoleEntity Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }*/
}