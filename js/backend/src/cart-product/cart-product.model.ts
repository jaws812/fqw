import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Cart } from "src/cart/cart.model";
import { Product } from "src/product/product.model";

interface CartProductCreationAttrs {
  idProduct:number;
  idCart:number;
}

@Table({ tableName: "cart-product" })
export class CartProduct extends Model<CartProduct, CartProductCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idCartProduct: number;

  @ForeignKey(() => Cart)
  @Column({ type: DataType.INTEGER })
  idCart: number; //ссылка на козину

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  idProduct: number; //ссылка на устройство

  @BelongsTo(() => Cart)
  cart: Cart[];

  @HasOne(() => Product, {
    foreignKey: "idProduct", //idProduct
    sourceKey: "idCartProduct", //idCartProduct
  })
  idSecondCartProduct: Product;
}
