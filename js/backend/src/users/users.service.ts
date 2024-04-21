import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { BanUserDto } from "./dto/ban-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const userDto = {
      ...dto,
      rating: 0,
      isStaff: false,
      isSuperUser: false,
      enabled: false,
    };
    const user = await this.userRepository.create(userDto);
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

  async ban(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException("Пользователь не найден", HttpStatus.NOT_FOUND);
    }
    await user.save();
    return user;
  }

  async updateUserNames({ idUser, firstName, lastName, secondName }) {
    const user = await this.userRepository.findOne({
      where: {
        idUser,
        firstName,
        lastName,
        secondName,
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
      user.firstName = firstName;
      user.lastName = lastName;
      user.secondName = secondName;
      await user.save();
      return user;
    }
  }
}
