import { Module } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Cart } from "./cart.model";
import { User } from "src/users/users.model";
import { CartProduct } from "src/cart-product/cart-product.model";

@Module({
  providers: [CartService],
  controllers: [CartController],
  imports: [SequelizeModule.forFeature([Cart, User, CartProduct])],
  exports: [CartService],
})
export class CartModule {}
