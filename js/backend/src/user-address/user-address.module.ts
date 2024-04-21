import { Module } from "@nestjs/common";
import { UserAddressService } from "./user-address.service";
import { User } from "src/users/users.model";
import { UsersAddressController } from "./user-address.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserAddress } from "./user-address.model";

@Module({
  providers: [UserAddressService],
  controllers: [UsersAddressController],
  imports: [SequelizeModule.forFeature([User, UserAddress])],
  exports: [UserAddressService],
})
export class UserAddressModule {}
