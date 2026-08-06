import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, index: true })
  userId: string;

  @Prop({ default: '' })
  thumbnailUrl: string;

  @Prop({ type: Array, default: [] })
  scenes: Array<{
    id: string;
    name: string;
    duration: number;
    backgroundColor: string;
    elements: Array<any>;
  }>;

  @Prop({ default: 'active', enum: ['active', 'trash'] })
  status: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
