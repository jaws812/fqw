import { Body, Controller, Get, Post } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";

@Controller("cart")
export class CartController {
  constructor(private cartService: CartService) {}

  @Post()
  create(@Body() cartDto: CreateCartDto) {
    return this.cartService.createCart(cartDto);
  }

  @Get()
  getAll() {
    return this.cartService.getAllCart();
  }
}
