import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Product } from "src/product/product.model";

interface ProductCharCreationAttrs {
  idProduct: number;
  title: string;
  description: string;
}

@Table({ tableName: "product-char" })
export class ProductChar extends Model<ProductChar, ProductCharCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idProductChar: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  idProduct: number;

  @Column({ type: DataType.STRING, allowNull:false })
  title: string;

  @Column({ type: DataType.STRING, allowNull:false })
  description: string;

  @BelongsTo(() => Product)
  idProd: Product;
}
