import {
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
  } from "sequelize-typescript";
  import { User } from "src/users/users.model";
import { Role } from "./roles.model";
  
  
  
  @Table({ tableName: "user_roles", createdAt:false, updatedAt:false })
  export class UserRoles extends Model<UserRoles> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    idUserRole: number;


  @ForeignKey(()=> Role)
    @Column({ type: DataType.INTEGER})
    idRole: number;
  
    @ForeignKey(()=> User)
    @Column({ type: DataType.INTEGER })
    idUser: number;
  
  
  
  }
  