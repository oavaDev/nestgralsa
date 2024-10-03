import {Controller, Get, UseGuards} from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../utils/shared/response.util";
import {JwtAuthGuard} from "../../security/authentication/guards/jwt.guard";
@ApiTags('user-role')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('user-role')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}
  @Get()
  async getAllUserRoles() {
    try {
      return createResponse(await this.userRoleService.getAllUserRoles(), "Roles de usuario obtenidos con éxito", 200);
    }catch (e) {
      return createResponse([], "Error al obtener los roles de usuario", 500);
    }
  }
}
