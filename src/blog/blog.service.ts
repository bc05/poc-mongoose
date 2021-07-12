import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { Blog } from './blog.model';

export interface IBlogFilters {
  title?: String;
}
@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.modelName)
    private readonly blogSchema: ModelType<Blog>,
  ) {}
  findAll(filters?: IBlogFilters) {
    return this.blogSchema.find({});
  }

  async create(data) {
    await this.blogSchema.create(data);
    return { message: 'registro criado com sucesso' };
  }
}
