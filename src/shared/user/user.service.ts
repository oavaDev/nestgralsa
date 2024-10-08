import {
  HttpException,
  Injectable,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {Repository} from "typeorm";
import {AuthRegisterDto} from "../../security/authentication/interfaces/authRegisterDTO.entity";

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>,
  ) {
  }
  async create(createUserDto: AuthRegisterDto) : Promise<UserEntity> {
    const userData = await this.userRepository.create(createUserDto);
    return this.userRepository.save(userData);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find({
      relations: [
        'roles',                    // Carga los roles del usuario
        'roles.role',               // Carga la información de los roles
        'roles.role.aplicacion',     // Carga la aplicación asociada al rol
        'roles.role.subarea',        // Carga la subárea asociada al rol
        'roles.role.subarea.area'    // Carga el área asociada a la subárea
      ],
    });
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const userData = this.userRepository.findOne({
        where: {email},
        relations: ['roles', 'roles.role', 'roles.role.aplicacion', 'roles.role.subarea', 'roles.role.subarea.area']
    });
    if (!userData){
      throw new HttpException('Usuario no encontrado', 404);
    }
    return userData;
  }

  async findOne(id: number): Promise<UserEntity> {
    const userData = this.userRepository.findOneBy({id})
    if (!userData){
      throw new HttpException('Usuario no encontrado', 404);
    }
    return userData;
  }
  async findByNIde(id: string): Promise<UserEntity> {
    const userData = this.userRepository.findOne({
      where: { n_identificacion: id },
      relations: ['roles', 'roles.role', 'roles.role.aplicacion', 'roles.role.subarea', 'roles.role.subarea.area']
    }); if (!userData){
      throw new HttpException('Usuario no encontrado', 404);
    }
    return userData;
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    const existingUser = await this.findByNIde(id);
    const userData = this.userRepository.merge( existingUser, updateUserDto);
    return await this.userRepository.save(userData);
  }

  async changePassword(id : string,password: string) {
    const user = await this.findByNIde(id);
    user.password = password
    return await this.userRepository.save(user);
  }

  async remove(id: string) {
    const existingUser = await this.findByNIde(id);
    return await this.userRepository.remove(existingUser);
  }
}
