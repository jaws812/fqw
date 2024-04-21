import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @Post("/registration")
  registration(@Body() userDto: RegisterUserDto) {
    return this.authService.registration(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("/check")
  check(@Query() params: any) {
    if (!params.email || !params.id) {
      console.log(params);
      throw new HttpException("Отсутсвуют параметры", HttpStatus.BAD_REQUEST);
    }
    return this.authService.check(params);
  }
}
