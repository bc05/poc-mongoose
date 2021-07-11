import { Controller, Inject } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  findAll() {
    return this.blogService.findAll();
  }
}
