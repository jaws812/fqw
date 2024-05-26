import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { BrandType } from "src/brand/brand-type.model";
import { Brand } from "src/brand/brand.model";
import { Product } from "src/product/product.model";

interface TypeCreationAttrs {
  idBrand: number;
  name: string;
}

@Table({ tableName: "type" })
export class Type extends Model<Type, TypeCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idType: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => Product)
  products: Product[];

  @BelongsToMany(() => Brand, () => BrandType)
  brands: Brand[];
}
