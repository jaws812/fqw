import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './cart.model';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
    constructor(
        @InjectModel(Cart) private cartRepository: typeof Cart
      ) {}

      async createCart(dto: CreateCartDto) {
        const cart = await this.cartRepository.create(dto);
        return cart;
      }

      async getAllCart() {
        const cart = await this.cartRepository.findAll({
          include: { all: true },
        });
        return cart;
      }
}
