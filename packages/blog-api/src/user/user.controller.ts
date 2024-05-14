import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  async create(@Body() body) {
    console.log('🙂🙂 ~ UserController ~ create ~ body:', body);
    return await this.userService.create(body);
  }
}
