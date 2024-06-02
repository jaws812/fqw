import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UploadedFiles,
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
    console.log("controlle images =  "+images);
    return this.productService.createProduct(dto, images);
  }

  @Post("/char-product")
  @UseInterceptors(FileInterceptor("file"))
  createProductAndChar(@Body() dto: CreateProductAndCharDto) {
    return this.productService.createProductWithChar(dto);
  }

  // @Post("/upload-multiple")
  // @UseInterceptors(FilesInterceptor("images"))
  // createWithMultipleImages(@Body() dto: CreateProductDto, @UploadedFiles() images
  // ) {
  //   return this.productService.createProduct(dto, images);
  // }

  @Get()
  getAll() {
    return this.productService.getAllProduct();
  }

  @Get(":idProduct")
  getOne(@Param("idProduct") idProduct: number) {
    return this.productService.getOneProduct(idProduct);
  }
}
