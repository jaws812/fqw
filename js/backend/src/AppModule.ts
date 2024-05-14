import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { AuthModule } from "./auth/auth.module";
import { FilesModule } from "./files/files.module";
import { UserAddressModule } from "./user-address/user-address.module";
import * as path from "path";
import { UserAddress } from "./user-address/user-address.model";
import { ServeStaticModule } from "@nestjs/serve-static";
import "dotenv/config";
import { Role } from "./roles/roles.model";
import { RolesModule } from "./roles/roles.module";
import { UserRoles } from "./roles/user-roles.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, UserAddress, Role, UserRoles],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    FilesModule,
    UserAddressModule,
    RolesModule
  ],
})
export class AppModule {}
