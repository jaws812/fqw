import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./product.model";
import { CreateProductDto } from "./dto/create-product.dto";
import { CreateProductAndCharDto } from "./dto/create-productAndChar.dto";
import { ProductCharService } from "src/product-char/product-char.service";
import { ImageService } from "src/image/image.service";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    private charService: ProductCharService,
    private imageService: ImageService
  ) {}

  async createProduct(dto: CreateProductDto, images) {
    const { name, describe, price, idBrand, idType } = dto;

    const product = await this.productRepository.create({
      name,
      describe,
      price,
      idBrand,
      idType,
    });
    console.log("images =  " + images);
    await this.imageService.createImage(
      { idProduct: product.idProduct },
      images
    );

    return product;
  }

  async createProductWithChar(dto: CreateProductAndCharDto) {
    const product = await this.productRepository.create(dto);

    for (const character of JSON.parse(dto.character)) {
      const air = {
        idProduct: character.idProduct,
        title: character.title,
        description: character.description,
      };

      air.idProduct = product.idProduct;
      const char = await this.charService.createProductChar(air);
    }
    return product;
  }

  async getAllProduct() {
    const product = await this.productRepository.findAll({
      include: { all: true },
      order: [["idProduct", "ASC"]],
    });
    return product;
  }

  async getOneProduct(idProduct: number) {
    const product = await this.productRepository.findByPk(idProduct, {
      include: { all: true },
    });
    return product;
  }

  async getProductsByBAT(idBrand: number, idType: number) {
    return this.productRepository.findAll({
      where: {
        idBrand,
        idType,
      },
    });
  }
}
