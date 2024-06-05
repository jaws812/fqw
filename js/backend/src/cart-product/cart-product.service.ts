import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CartProduct } from "./cart-product.model";
import { CreateCartProductDto } from "./dto/create-cartProduct.dto";

@Injectable()
export class CartProductService {
  constructor(
    @InjectModel(CartProduct) private cartProductRepository: typeof CartProduct
  ) {}

  async createCartProduct(dto: CreateCartProductDto) {
    const cartP = await this.cartProductRepository.create(dto);
    return cartP;
  }

  async getAllCartProduct() {
    const cartP = await this.cartProductRepository.findAll({
      include: { all: true },
    });
    return cartP;
  }
}
