import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserAddressService } from "./user-address.service";
import { CreateUserAddressDto } from "./dto/create-useraddress.dto";

@Controller("users-addres")
export class UsersAddressController {
  constructor(private usersAddresService: UserAddressService) {}

  @Post()
  create(@Body() adressDto: CreateUserAddressDto) {
    return this.usersAddresService.createAddress(adressDto);
  }

  @Get(":userId")
  findOne(@Param("userId") userId: number) {
    return this.usersAddresService.getAddressByUserId(userId);
  }

  @Get()
  getAll() {
    return this.usersAddresService.getAllAddress();
  }
}
