import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.modelName)
    private readonly userModel: ModelType<User>,
  ) {}

  async findAll(): Promise<ModelType<User> | null> {
    return this.userModel.find({});
  }

  async create(data: {}): Promise<{ message: String; error?: Object }> {
    try {
      await this.userModel.create(data);
      return { message: 'Registro criado com sucesso' };
    } catch (error) {
      return { message: 'Ocorreu um erro interno', error };
    }
  }
}
