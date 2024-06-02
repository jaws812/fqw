import { Module } from "@nestjs/common";
import { ImageController } from "./image.controller";
import { ImageService } from "./image.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Image } from "./image.model";
import { Product } from "src/product/product.model";
import { FilesModule } from "src/files/files.module";

@Module({
  controllers: [ImageController],
  providers: [ImageService],
  imports: [SequelizeModule.forFeature([Image, Product]), FilesModule],
  exports:[ImageService ]
})
export class ImageModule {}
