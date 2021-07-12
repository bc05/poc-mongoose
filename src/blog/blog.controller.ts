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
    const data = {
      title: 'Meu blog',
      createdBy: '60eb9fb7954f09efe2b37289',
      posts: [
        {
          author: '60eb9fb7954f09efe2b37289',
          content: 'lorem mussum ipsum doidum',
        },
      ],
    };
    return this.blogService.create(data);
  }
}
