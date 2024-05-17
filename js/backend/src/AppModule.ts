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
import { CartModule } from "./cart/cart.module";
import { Cart } from "./cart/cart.model";
import { CartProduct } from "./cart-product/cart-product.model";
import { CartProductModule } from "./cart-product/cart-product.module";
import { ProductModule } from "./product/product.module";
import { Product } from "./product/product.model";
import { ProductChar } from "./product-char/product-char.model";
import { BrandModule } from "./brand/brand.module";
import { Brand } from "./brand/brand.model";
import { TypeModule } from "./type/type.module";
import { Type } from "./type/type.model";
import { BrandType } from "./brand/brand-type.model";

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
      models: [User, UserAddress, Role, UserRoles, Cart, CartProduct, Product, ProductChar, Brand,Type, BrandType],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    FilesModule,
    UserAddressModule,
    RolesModule,
    CartModule,
    CartProductModule,
    BrandModule,
    ProductModule,
    TypeModule
  ],
})
export class AppModule {}
