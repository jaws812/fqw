import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductCharService } from "./product-char.service";
import { CreateProductCharDto } from "./dto/create-product-char.dto";

@Controller("product-char")
export class ProductCharController {
  constructor(private productCharService: ProductCharService) {}

  @Post()
  create(@Body() dto: CreateProductCharDto) {
    return this.productCharService.createProductChar(dto);
  }

  @Get()
  getAll() {
    return this.productCharService.getAllProductChar();
  }
}
