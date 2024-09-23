import {Injectable, Post} from '@nestjs/common';
import {Repository} from "typeorm";
import {RoleEntity} from "./entities/role.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateRoleDto} from "./dto/create-role.dto";
import {UserEntity} from "../user/entities/user.entity";

@Injectable()
export class RoleService {

    constructor(
        @InjectRepository(RoleEntity)
        private readonly roleRepository: Repository<RoleEntity>,
    ) {
    }
    async getAllRoles() : Promise<RoleEntity[]> {
        return this.roleRepository.find({
            relations : [
                'aplicacion',
                'subarea',
                'subarea.area'
            ]
        })
    }
    async create(role : CreateRoleDto) : Promise<RoleEntity> {
        return this.roleRepository.create(role)
    }
}
