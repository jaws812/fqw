// import { Module } from "@nestjs/common";
// import { SequelizeModule } from "@nestjs/sequelize";
// import { UsersModule } from "./users/users.module";
// import { ConfigModule } from "@nestjs/config";
// import { User } from "./users/users.model";
// import { AuthModule } from "./auth/auth.module";
// import { FilesModule } from "./files/files.module";
// // import { ServeStaticModule } from "@nestjs/serve-stat";
// import { UserAddressModule } from "./user-address/user-address.module";
// import { OfferListModule } from "./offer-list/offer-list.module";
// // import { OfferListModule } from "./offer-list/offer-list.module";
// import { WishListModule } from "./wish-list/wish-list.module";
// import { BookLiteraryModule } from "./book-literary/book-literary.module";
// import { AutorModule } from "./autor/autor.module";
// import { BookResponseModule } from "./book-response/book-response.module";
// import { UserMsgModule } from "./user-msg/user-msg.module";
// import { ExchangeListModule } from "./exchange-list/exchange-list.module";
// import { UserExchangeListModule } from "./user-exchange-list/user-exchange-list.module";
// import { UserListController } from "./user-list/user-list.controller";
// import { UserListService } from "./user-list/user-list.service";
// import { UserListModule } from "./user-list/user-list.module";
// import { UserValueCategoryModule } from "./user-value-category/user-value-category.module";
// import { CategoryController } from "./category/category.controller";
// import { CategoryService } from "./category/category.service";
// import { CategoryModule } from "./category/category.module";
// import { StatusModule } from "./status/status.module";
// import * as path from "path";
// import { UserAddress } from "./user-address/user-address.model";
// import { UserMsg } from "./user-msg/user-msg.model";
// import { Status } from "./status/status.model";
// import { WishList } from "./wish-list/wish-list.model";
// import { Offer } from "./offer-list/offer-list.model";
// import { BookResponse } from "./book-response/book-response.model";
// import { BookLiterary } from "./book-literary/book-literary.model";
// import { Autor } from "./autor/autor.model";
// import { ExchangeList } from "./exchange-list/exchange-list.model";
// import { UserExchangeList } from "./user-exchange-list/user-exchange-list.model";
// import { UserList } from "./user-list/user-list.model";
// import { UserValueCategory } from "./user-value-category/user-value-category.model";
// import { Category } from "./category/category.model";
// import { TradeBlankModule } from "./trade-blank/trade-blank.module";
// import { WishTradeBlankModule } from "./wish-tradeblank/wish-tradeblank.module";
// // import { WishTradeBlankModule } from "./get-category/wish-tradeblank.module";

// @Module({
//   controllers: [], //TradeBlankController, GetCategoryController
//   providers: [], //TradeBlankService, GetCategoryService
//   imports: [
//     ConfigModule.forRoot({
//       envFilePath: `.${process.env.NODE_ENV}.env`,
//     }),
//     ServeStaticModule.forRoot({
//       rootPath: path.resolve(__dirname, "static"),
//     }),
//     SequelizeModule.forRoot({
//       dialect: "postgres",
//       host: process.env.POSTGRES_HOST,
//       port: Number(process.env.POSTGRES_PORT),
//       username: process.env.POSTGRES_USER,
//       password: process.env.POSTGRES_PASSWORD,
//       database: process.env.POSTGRES_DB,
//       models: [
//         User,
//         UserAddress,
//         UserMsg,
//         Status,
//         WishList,
//         Offer,
//         BookResponse,
//         BookLiterary,
//         Autor,
//         ExchangeList,
//         UserExchangeList,
//         UserList,
//         UserValueCategory,
//         Category,
//       ],
//       autoLoadModels: true,
//     }),
//     UsersModule,
//     AuthModule,
//     FilesModule,
//     UserAddressModule,
//     OfferListModule,
//     WishListModule,
//     BookLiteraryModule,
//     AutorModule,
//     BookResponseModule,
//     UserMsgModule,
//     ExchangeListModule,
//     UserExchangeListModule,
//     UserListModule,
//     UserValueCategoryModule,
//     CategoryModule,
//     StatusModule,
//     TradeBlankModule,
//     WishTradeBlankModule,
//   ],
// })
// export class AppModule {}
