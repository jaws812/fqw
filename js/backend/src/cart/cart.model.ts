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
  infoAboutUser: User;//показывает информацию о пользователе, которому принадлежит корзина

  @HasMany(() => CartProduct)
  allUsersCarts: CartProduct[];//показывет массив корзин пользователей и продукты в них
}
