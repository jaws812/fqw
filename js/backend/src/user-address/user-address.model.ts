import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";

interface UserAddressCreationAttrs {
  idUser: number;
  city: string;
  street: string;
  house: string;
  apartment: string;
}

@Table({ tableName: "users-address", createdAt: false, updatedAt: false })
export class UserAddress extends Model<UserAddress, UserAddressCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idUserAddress: number;

  @ForeignKey(() => User) // дописать связь в юзере
  @Column({ type: DataType.INTEGER })
  idUser: number;

  @Column({ type: DataType.STRING, allowNull: false })
  city: string;

  @Column({ type: DataType.STRING, allowNull: false })
  street: string;

  @Column({ type: DataType.STRING, allowNull: false })
  house: string;

  @Column({ type: DataType.STRING, allowNull: false })
  apartment: string;

  @BelongsTo(() => User)
  user: User;
}
