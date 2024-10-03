import {Controller, Get} from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import {ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../utils/shared/response.util";
@ApiTags('user-role')
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
