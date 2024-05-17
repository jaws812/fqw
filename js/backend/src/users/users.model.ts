import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Cart } from "src/cart/cart.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { UserAddress } from "src/user-address/user-address.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  // static save(user: User) {
  //   throw new Error("Method not implemented.");
  // }
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idUser: number;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @BelongsToMany(()=>Role, ()=>UserRoles)
  roles: Role[];

  @HasMany(() => UserAddress)
  userAddress: UserAddress[];

  @HasOne(() => Cart, {
    foreignKey: "idUser",
    sourceKey: "idUser",
  })
  idUserCart: Cart;


}
