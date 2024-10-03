import {Controller, Get,Param, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import {JwtAuthGuard} from "../../security/authentication/guards/jwt.guard"
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../utils/shared/response.util";
@ApiTags('user')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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