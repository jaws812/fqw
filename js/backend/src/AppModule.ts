import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { AuthModule } from "./auth/auth.module";
import { FilesModule } from "./files/files.module";
import { UserAddressModule } from "./user-address/user-address.module";
import { UserMsgModule } from "./user-msg/user-msg.module";
import * as path from "path";
import { UserAddress } from "./user-address/user-address.model";
import { UserMsg } from "./user-msg/user-msg.model";
import { ServeStaticModule } from "@nestjs/serve-static";
import "dotenv/config";

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
      models: [User, UserAddress, UserMsg],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    FilesModule,
    UserAddressModule,
    UserMsgModule,
  ],
})
export class AppModule {}
