import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserMsgService } from "./user-msg.service";
import { CreateUserMsgDto } from "./dto/create-usermsg.dto";

@Controller("user-msg")
export class UserMsgController {
  constructor(private usersMsgService: UserMsgService) {}

  @Post()
  create(@Body() msgDto: CreateUserMsgDto) {
    return this.usersMsgService.createMsg(msgDto);
  }

  @Get()
  getAll() {
    return this.usersMsgService.getAllMsg();
  }
}
