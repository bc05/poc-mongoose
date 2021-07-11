import { prop, Typegoose } from 'typegoose';

export class SchemaBase extends Typegoose {
  @prop({ required: true, default: Date.now() })
  createdAt!: Date;
}
