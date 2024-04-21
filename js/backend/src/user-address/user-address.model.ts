import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";

interface UserAddressCreationAttrs {
  idUser: number;
  addrIndex: string;
  addrCity: string;
  addrSreet: string;
  addrHouse: string;
  addrStructure?: string; //может прийти а может и не прийти
  addrApart?: string;
  isDefault: boolean;
}

@Table({ tableName: "users-address" })
export class UserAddress extends Model<UserAddress, UserAddressCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idUserAddress: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  idUser: number;

  @Column({ type: DataType.STRING, allowNull: false })
  addrIndex: string;

  @Column({ type: DataType.STRING, allowNull: false })
  addrCity: string;

  @Column({ type: DataType.STRING, allowNull: false })
  addrSreet: string;

  @Column({ type: DataType.STRING, allowNull: false })
  addrHouse: string;

  @Column({ type: DataType.STRING, defaultValue: null })
  addrStructure: string;

  @Column({ type: DataType.STRING, defaultValue: null })
  addrApart: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  isDefault: boolean;
}
