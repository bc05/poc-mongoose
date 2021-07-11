import { SchemaBase } from 'src/commom/schema-base.schema';
import { prop } from 'typegoose';

class Blog extends SchemaBase {
  @prop({ required: true })
  public title!: String;
}
