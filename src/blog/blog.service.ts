import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/user.model';
import { ModelType } from 'typegoose';
import { Blog } from './post/entities/blog.model';

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
    return this.blogSchema
      .find()
      .populate({
        path: 'createdBy',
        moddel: User.modelName,
        populate: {
          path: 'posts.author',
          model: User.modelName,
        },
      })
      .exec();
  }

  async create(data): Promise<{ message: String; error?: Object }> {
    try {
      await this.blogSchema.create(data);
      return { message: 'registro criado com sucesso' };
    } catch (error) {
      return { message: 'Ocorreu um erro interno', error };
    }
  }
}
