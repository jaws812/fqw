import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Image } from './image.model';
import { CreateImageDto } from './dto/create-image.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class ImageService {
    constructor(
        @InjectModel(Image) private imageModel: typeof Image,
        private filesService: FilesService
      ) {}

      async createImage(dto: CreateImageDto, images) {
        const fileName= await this.filesService.createFile(images)
        const productImage= await this.imageModel.create({...dto, image: fileName});
        // const image = await this.imageModel.create({...dto, image: images});
        return productImage;
      }

      async getAllCartProduct() {
        const image = await this.imageModel.findAll({
          include: { all: true },
        });
        return image;
      }
}
