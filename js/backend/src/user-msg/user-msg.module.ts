import { Module } from "@nestjs/common";
import { UserMsgService } from "./user-msg.service";
import { UserMsgController } from "./user-msg.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/users/users.model";
import { UserMsg } from "./user-msg.model";

@Module({
  providers: [UserMsgService],
  controllers: [UserMsgController],
  imports: [SequelizeModule.forFeature([User, UserMsg])],
})
export class UserMsgModule {}
