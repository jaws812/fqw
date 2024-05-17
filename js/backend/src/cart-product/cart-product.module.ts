import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { CartProductService } from './cart-product.service';
import { CartProductController } from './cart-product.controller';
import { Cart } from 'src/cart/cart.model';
import { CartProduct } from './cart-product.model';
import { Product } from 'src/product/product.model';

@Module({
    providers: [CartProductService],
    controllers: [CartProductController],
    imports: [
      SequelizeModule.forFeature([Cart, User,CartProduct,Product]),
    ],
})
export class CartProductModule {}
