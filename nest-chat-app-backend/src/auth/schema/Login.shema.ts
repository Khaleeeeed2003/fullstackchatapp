import{Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'


export type DbDocument = Document & DbClass
@Schema()
export class DbClass{
    @Prop({unique:true})
    email:string
    @Prop()
    password:string
}
export const dbschema = SchemaFactory.createForClass(DbClass)