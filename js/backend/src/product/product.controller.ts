import { Body, Controller, Get, Param, Post, UseInterceptors } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductService } from "./product.service";
import { CreateProductAndCharDto } from "./dto/create-productAndChar.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("product")
export class ProductController {
  constructor(private productService: ProductService,) {}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }


  @Post("/char-product")
  @UseInterceptors(FileInterceptor('file'))
  createProductAndChar(@Body() dto: CreateProductAndCharDto) {
    return this.productService.createProductWithChar(dto);
  }


  
  @Get()
  getAll() {
    return this.productService.getAllProduct();
  }

  @Get(":idProduct")
  getOne(@Param("idProduct") idProduct: number) {
    return this.productService.getOneProduct(idProduct);
  }
}
