import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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

  @Get(":idUser")
  getOne(@Param("idUser") idUser: number) {
    return this.cartService.getCartByUserId(idUser);
  }
}
