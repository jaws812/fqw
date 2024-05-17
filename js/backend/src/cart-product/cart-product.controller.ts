import { Body, Controller, Get, Post } from '@nestjs/common';
import { CartProductService } from './cart-product.service';
import { CreateCartProductDto } from './dto/create-cartProduct.dto';

@Controller('cart-product')
export class CartProductController {

    constructor(private cartService: CartProductService) {}

    @Post()
  create(@Body() adressDto: CreateCartProductDto) {
    return this.cartService.createCartProduct(adressDto);
  }

  @Get()
  getAll() {
    return this.cartService.getAllCartProduct();
  }
}
