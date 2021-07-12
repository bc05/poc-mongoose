import { BaseModel } from 'src/common/base-model.model';
import { User } from 'src/user/user.model';
import { ModelType, prop, Ref, Typegoose } from 'typegoose';
import { Post } from './post.model';

export class Blog extends BaseModel {
  @prop({ required: true })
  public title!: String;

  @prop({ required: true })
  posts!: Post[];

  @prop({ required: true, ref: User })
  createdBy!: Ref<User>;

  static get model(): ModelType<Blog> {
    return new Blog().getModelForClass(Blog);
  }

  static get modelName(): string {
    return this.model.modelName;
  }
}
