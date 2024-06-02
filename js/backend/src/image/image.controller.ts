import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { ImageService } from "./image.service";
import { CreateImageDto } from "./dto/create-image.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express } from "express";

@Controller("image")
export class ImageController {
  constructor(private imageService: ImageService) {}

  //   @Post("/upload")
  //   @UseInterceptors(FileInterceptor("file"))
  //   uploadFile(@UploadedFile() file: Express.Multer.File) {
  //     console.log(file);
  //   }
  @Post()
  @UseInterceptors(FileInterceptor("images"))
  create(@Body() dto: CreateImageDto, @UploadedFile() images) {
    return this.imageService.createImage(dto,images);
  }

  @Get()
  getAll() {
    return this.imageService.getAllCartProduct();
  }
}
