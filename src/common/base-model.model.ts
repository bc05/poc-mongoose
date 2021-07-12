import { prop, Typegoose } from 'typegoose';

export class BaseModel extends Typegoose {
  @prop({ required: true, default: Date.now() })
  createdAt!: Date;
}
