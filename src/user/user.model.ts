import { BaseModel } from 'src/common/base-model.model';
import { ModelType, prop } from 'typegoose';

export class User extends BaseModel {
  @prop({ required: true })
  firstName!: String;

  @prop({ required: true })
  lastName!: String;

  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static get model(): ModelType<User> {
    return new User().getModelForClass(User);
  }

  static get modelName(): string {
    return this.model.modelName;
  }
}
