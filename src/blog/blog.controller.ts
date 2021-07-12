import { Body, Controller, Get, Query } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll(@Query('title') title: String) {
    return this.blogService.findAll({ title });
  }

  // This is for tests XD
  @Get('create')
  async create(@Body() body: {}) {
    const data = { title: 'um texto sobre a vida' };
    return this.blogService.create(data);
  }
}
