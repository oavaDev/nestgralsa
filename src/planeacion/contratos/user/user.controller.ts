import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      await this.userService.create(createUserDto);
      return {
        message: 'Usuario creado correctamente',
        data: createUserDto,
        success: true,
      };
      }catch (error){
        return {
          message: 'Error al crear el usuario',
          error: error.message,
          success: false,
        };
    }
  }
  @Get()
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
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.userService.findOne(parseInt(id));
      return {
        message: 'Usuario encontrado',
        data: data,
        success: true,
      };
    }catch (error){
      return {
        message: 'Error al obtener el usuario',
        error: error.message,
        success: false,
      }
    }
  }
  @Patch(':id')
  async update(
      @Param('id') id: string,
      @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      await this.userService.update(
          +id,
          updateUserDto,
      );
      return {
        success: true,
        message: 'UserEntity Updated Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.userService.remove(+id);
      return {
        success: true,
        message: 'UserEntity Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
