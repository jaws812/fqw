import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductService } from "./product.service";
import { CreateProductAndCharDto } from "./dto/create-productAndChar.dto";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";

@Controller("product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @UseInterceptors(FilesInterceptor("images"))
  create(@Body() dto: CreateProductDto, @UploadedFile() images) {
    return this.productService.createProduct(dto, images);
  }

  @Post("/char-product")
  @UseInterceptors(FileInterceptor("file"))
  createProductAndChar(@Body() dto: CreateProductAndCharDto) {
    return this.productService.createProductWithChar(dto);
  }

  @Get()
  getAll() {
    return this.productService.getAllProduct();
  }

  @Get("/filter")
  async getProductsByBrandAndType(
    @Query("idBrand") idBrand: number,
    @Query("idType") idType: number
  ) {
    return this.productService.getProductsByBAT(idBrand, idType);
  }

  @Get(":idProduct")
  getOne(@Param("idProduct") idProduct: number) {
    return this.productService.getOneProduct(idProduct);
  }

  
}
