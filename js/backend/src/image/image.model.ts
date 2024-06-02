import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/product/product.model';


interface ImageCreationAttrs {
  idProduct:number;
  image:string;
}

@Table({ tableName: 'image' })
export class Image extends Model<Image, ImageCreationAttrs> {
  @ForeignKey(() => Product)
  @Column
  idProduct: number;

  @Column
  image: string;
}