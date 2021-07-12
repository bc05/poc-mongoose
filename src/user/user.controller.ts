import { Body, Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  // this is for test XD
  @Get('create')
  async create(@Body() body: {}) {
    const data = {
      firstName: 'Luca',
      lastName: 'Psat',
    };
    return this.userService.create(data);
  }
}
