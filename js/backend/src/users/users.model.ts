import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { UserAddress } from "src/user-address/user-address.model";
import { UserMsg } from "src/user-msg/user-msg.model";

interface UserCreationAttrs {
  // firstName: string;
  // lastName: string;
  // secondName: string;
  email: string;
  // userName: string;
  password: string;
  // rating: number;
  // enabled: boolean;
  // isStaff: boolean;
  // isSuperUser: boolean;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idUser: number;

  // @Column({ type: DataType.STRING, allowNull: false })
  // firstName: string;

  // @Column({ type: DataType.STRING, allowNull: false })
  // lastName: string;

  // @Column({ type: DataType.STRING })
  // secondName: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  // @Column({ type: DataType.STRING, allowNull: false })
  // userName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  // @Column({ type: DataType.INTEGER, allowNull: false })
  // rating: number;

  // @Column({ type: DataType.BOOLEAN, allowNull: false })
  // enabled: boolean;

  // @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  // isStaff: boolean;

  // @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  // isSuperUser: boolean;
}
