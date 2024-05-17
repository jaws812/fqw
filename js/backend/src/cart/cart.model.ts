import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { CartProduct } from "src/cart-product/cart-product.model";
import { User } from "src/users/users.model";

interface CartCreationAttrs {
  idUser: number;
}

@Table({ tableName: "cart" })
export class Cart extends Model<Cart, CartCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idCart: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  idUser: number;

  @HasOne(() => User, {
    foreignKey: "idUser", 
    sourceKey: "idCart",
  })
  idCartUser: User;

  @HasMany(() => CartProduct)
  cartProduct: CartProduct[];
}
