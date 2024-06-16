import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Type } from "./type.model";
import { CreateTypeDto } from "./dto/create-type.dto";
import { Brand } from "src/brand/brand.model";
import { CreateBrandDto } from "src/brand/dto/create-brand.dto";
import { BrandService } from "src/brand/brand.service";

@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type) private typeRepository: typeof Type,
    private brandService: BrandService
  ) {}

  async createType(dto: CreateTypeDto) {
    const type = await this.typeRepository.create(dto);
    return type;
  }

  async createTypeWithBrand(dto: CreateTypeDto) {
    const type = await this.typeRepository.create(dto);

    const brand = await this.brandService.getBrandById(dto.idBrand);
    if (type && brand) {
      await type.$add("brands", brand.idBrand);
      return type;
    }
    throw new HttpException(
      "Пользователь или роль не найдены",
      HttpStatus.NOT_FOUND
    );
  }

  async getAllType() {
    const type = await this.typeRepository.findAll({
      include: { all: true },
    });
    return type;
  }
}
