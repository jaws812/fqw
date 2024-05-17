import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "src/roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService
  ) {}

  async addRole(dto:AddRoleDto){
    const user = await this.userRepository.findByPk(dto.idUser);
    const role = await this.roleService.getRoleByValue(dto.value);
    if(user && role){
      await user.$add('role', role.idRole);
      return dto;
    }
    throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue("ADMIN");
    await user.$set('roles', [role.idRole])
    user.roles=[role]
    await user.save();
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async updateUserNames({ idUser}) { //async updateUserNames({ idUser, firstName, lastName, secondName })
    const user = await this.userRepository.findOne({
      where: {
        idUser,
      },
    });

    if (user) {
      return user;
    } else {
      const user = await this.userRepository.findOne({
        where: {
          idUser: idUser,
        },
      });
      await user.save();
      return user;
    }
  }
}
