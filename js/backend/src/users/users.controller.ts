import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    //
    return this.usersService.createUser(userDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Get("/ban")
  ban(@Body() dto: BanUserDto) {
    return this.usersService.ban(dto);
  }
}
