import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserMsg } from "./user-msg.model";
import { CreateUserMsgDto } from "./dto/create-usermsg.dto";

@Injectable()
export class UserMsgService {
  constructor(
    @InjectModel(UserMsg) private userMsgRepository: typeof UserMsg
  ) {}

  async createMsg(dto: CreateUserMsgDto) {
    const msg = await this.userMsgRepository.create(dto);
    return msg;
  }

  async getAllMsg() {
    const msg = await this.userMsgRepository.findAll({
      include: { all: true },
    });
    return msg;
  }
}
