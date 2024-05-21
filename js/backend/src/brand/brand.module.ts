import { Module } from '@nestjs/common';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Brand } from './brand.model';
import { Product } from 'src/product/product.model';
import { Type } from 'src/type/type.model';
import { BrandType } from './brand-type.model';

@Module({
  providers: [BrandService],
  controllers: [BrandController],
  imports: [
    SequelizeModule.forFeature([ Brand, Product,Type, BrandType]),
  ],
  exports:[BrandService]
})
export class BrandModule {}
