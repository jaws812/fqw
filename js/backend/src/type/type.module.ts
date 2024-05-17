import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Type } from './type.model';
import { Product } from 'src/product/product.model';
import { Brand } from 'src/brand/brand.model';
import { BrandType } from 'src/brand/brand-type.model';

@Module({
    providers: [TypeService],
    controllers: [TypeController],
    imports: [
      SequelizeModule.forFeature([Type,Product, Brand, BrandType]),
    ],
})
export class TypeModule {}
