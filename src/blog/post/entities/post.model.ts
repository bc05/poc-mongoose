import { BaseModel } from 'src/common/base-model.model';
import { User } from 'src/user/user.model';
import { ModelType, prop, Ref } from 'typegoose';

export class Post extends BaseModel {
  @prop({ required: true })
  content: String;

  @prop({ required: true, ref: () => User })
  author: Ref<User>;

  static get model(): ModelType<Post> {
    return new Post().getModelForClass(Post);
  }

  static get modelName(): string {
    return this.model.modelName;
  }
}
