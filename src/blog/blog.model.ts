import { BaseModel } from 'src/common/base-model.model';
import { ModelType, prop, Typegoose } from 'typegoose';

export class Blog extends BaseModel {
  @prop({ required: true })
  public title!: String;

  static get model(): ModelType<Blog> {
    return new Blog().getModelForClass(Blog);
  }

  static get modelName(): string {
    return this.model.modelName;
  }
}
