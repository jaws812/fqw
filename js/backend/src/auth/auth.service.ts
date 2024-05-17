import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import * as bcrypt from "bcryptjs";
import { User } from "src/users/users.model";
import { LoginUserDto } from "./dto/login-user.dto";
import { RegisterUserDto } from "./dto/register-user.dto";
import { CreateUserAddressDto } from "src/user-address/dto/create-useraddress.dto";
import { UserAddressService } from "src/user-address/user-address.service";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private userAddressService: UserAddressService
  ) {}

  async login(userDto: LoginUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async check(params: any) {
    return {
      token: this.jwtService.sign({
        email: params.email,
        id: params.id,
      }),
    };
  }

  async registration(userDto: RegisterUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        "Пользователь с таким email существует",
        HttpStatus.BAD_REQUEST
      );
    }

    const userCreate: CreateUserDto = {
      // firstName: userDto.firstName,
      // lastName: userDto.lastName,
      // secondName: userDto?.secondName,
      email: userDto.email,
      // userName: userDto.userName,
      password: userDto.password,
    };

    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({
      ...userCreate,
      password: hashPassword,
    });

    const currenUser = await this.userService.getUserByEmail(user.email);

    // const adressCreate: CreateUserAddressDto = {
    //   idUser: currenUser.idUser,
    //   addrIndex: userDto.addrIndex,
    //   addrCity: userDto.addrCity,
    //   addrSreet: userDto.addrSreet,
    //   addrHouse: userDto.addrHouse,
    //   addrStructure: userDto?.addrStructure,
    //   addrApart: userDto?.addrApart,
    // };

    // const userAddress =
    //   await this.userAddressService.createAddress(adressCreate);

    return this.generateToken(user);
  }

  // private async generateToken(user: User) {
  //   const payload = {
  //     email: user.email,
  //     id: user.idUser,
  //     // userName: user.userName,
  //   };
  //   return {
  //     token: this.jwtService.sign(payload),
  //   };
  // }

  private async generateToken(user: User) {
    const payload = {email: user.email, id: user.id, roles: user.roles}
    return {
        token: this.jwtService.sign(payload)
    }
}

  private async validateUser(userDto: LoginUserDto) {
    console.log({ userDto });
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password
    );
    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({
      message: "Некорректный емайл или пароль",
    });
  }
}
