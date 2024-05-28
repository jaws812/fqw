import { Module } from "@nestjs/common";
import { ProductCharService } from "./product-char.service";
import { ProductCharController } from "./product-char.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Product } from "src/product/product.model";
import { ProductChar } from "./product-char.model";

@Module({
  providers: [ProductCharService],
  controllers: [ProductCharController],
  imports: [SequelizeModule.forFeature([Product, ProductChar])],
  exports:[ProductCharService]
})
export class ProductCharModule {}
