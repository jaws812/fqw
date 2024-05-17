import {
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    HasOne,
    Model,
    Table,
  } from "sequelize-typescript";
  import { Product } from "src/product/product.model";
  import { Type } from "src/type/type.model";
import { Brand } from "./brand.model";
  
  
  @Table({ tableName: "brand_type", createdAt:false,updatedAt:false })
  export class BrandType extends Model<BrandType> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    idBrandType: number;
  
    @ForeignKey(()=> Brand)
    @Column({ type: DataType.INTEGER })
    idBrand: number;

    @ForeignKey(()=>Type)
    @Column({ type: DataType.INTEGER })
    idType: number;
  
    
  }
  