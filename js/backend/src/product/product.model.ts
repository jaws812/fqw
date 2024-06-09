import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Brand } from "src/brand/brand.model";
import { CartProduct } from "src/cart-product/cart-product.model";
import { Image } from "src/image/image.model";
import { ProductChar } from "src/product-char/product-char.model";
import { Type } from "src/type/type.model";

interface ProductCreationAttrs {
  name: string;
  describe: string;
  price: number;
  idBrand: number;
  idType: number;
}

@Table({ tableName: "product", createdAt: false, updatedAt: false })
export class Product extends Model<Product, ProductCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idProduct: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  describe: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @ForeignKey(() => Brand)
  @Column({ type: DataType.INTEGER })
  idBrand: number;

  @ForeignKey(() => Type)
  @Column({ type: DataType.INTEGER })
  idType: number;

  @HasOne(() => CartProduct, {
    foreignKey: "idProduct", 
    sourceKey: "idProduct", 
  })
  idProductCart: CartProduct;

  @HasMany(() => ProductChar)
  idProdChar: ProductChar[];

  @BelongsTo(() => Brand)
  prodBrand: Brand;

  @BelongsTo(() => Type)
  prodType: Type;

  @HasMany(() => Image) 
  images: Image[];
}
