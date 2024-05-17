import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ProductChar } from "./product-char.model";
import { CreateProductCharDto } from "./dto/create-product-char.dto";

@Injectable()
export class ProductCharService {
  constructor(
    @InjectModel(ProductChar) private productCharRepository: typeof ProductChar
  ) {}

  async createProductChar(dto: CreateProductCharDto) {
    const char = await this.productCharRepository.create(dto);
    return char;
  }

  async getAllProductChar() {
    const char = await this.productCharRepository.findAll({
      include: { all: true },
    });
    return char;
  }
}
