import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Product } from "src/product/product.model";
import { Type } from "src/type/type.model";
import { BrandType } from "./brand-type.model";

interface BrandCreationAttrs {
  name: string;
}

@Table({ tableName: "brand", createdAt: false, updatedAt: false })
export class Brand extends Model<Brand, BrandCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idBrand: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => Product)
  products: Product[];

  @BelongsToMany(() => Type, () => BrandType)
  types: Type[];
}
