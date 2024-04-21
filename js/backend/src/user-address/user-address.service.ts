import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserAddress } from "./user-address.model";
import { CreateUserAddressDto } from "./dto/create-useraddress.dto";

@Injectable()
export class UserAddressService {
  constructor(
    @InjectModel(UserAddress) private userAddresRepository: typeof UserAddress
  ) {}

  async getAddressByUserId(userId: number) {
    const address = await this.userAddresRepository.findOne({
      where: {
        idUser: userId,
      },
    });
    return address;
  }

  async createAddress(dto: CreateUserAddressDto) {
    const address = await this.userAddresRepository.create(dto);
    return address;
  }

  async getAllAddress() {
    const address = await this.userAddresRepository.findAll({
      include: { all: true },
    });
    return address;
  }

  async getAddressByDto(dto: CreateUserAddressDto) {
    const address = await this.userAddresRepository.findOne({
      where: {
        ...dto,
      },
    });
    return address;
  }
}
