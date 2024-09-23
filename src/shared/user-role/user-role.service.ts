import {Inject, Injectable} from '@nestjs/common';
import {UserRoleEntity} from "./entities/user-role.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserRoleService {
    constructor(
        @InjectRepository(UserRoleEntity)
        private readonly userRoleRepository: Repository<UserRoleEntity>,
    ) {}
    async getAllUserRoles() : Promise<UserRoleEntity[]> {
        return this.userRoleRepository.find({
            relations : [
                'user',
                'role',
                'aplication',
                'area',
                'subarea'
            ]
        })
    }
}
