import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { Product } from "./product.model";
import { CartProduct } from "src/cart-product/cart-product.model";
import { ProductChar } from "src/product-char/product-char.model";
import { Brand } from "src/brand/brand.model";
import { Type } from "src/type/type.model";
import { ProductCharModule } from "src/product-char/product-char.module";
import { Image } from "src/image/image.model";
import { ImageModule } from "src/image/image.module";

@Module({
  providers: [ProductService],
  controllers: [ProductController],
  imports: [
    SequelizeModule.forFeature([
      Product,
      Brand,
      Type,
      CartProduct,
      ProductChar,
      Image
    ]),ProductCharModule, ImageModule
  ],
  
})
export class ProductModule {}
