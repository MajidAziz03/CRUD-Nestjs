import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatedDto } from './dto/user-created';

const users = [];

@Controller('users')
export class UserController {
  @Post('')
  @HttpCode(201)
  createUser(@Body() createdUser: CreatedDto) {
    users.push(createdUser);
    return 'users added';
  }

  @Get('')
  getAllUsers() {
    return users;
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return users.filter((user) => user.id === id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updated: CreatedDto) {
    const userIdx = users.findIndex((user) => user.id === id);
    if (!userIdx) {
      return;
    }
    users[userIdx] = updated;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    const user = users.filter((user) => user.id !== id);
    return ' Deleted';
  }
}
