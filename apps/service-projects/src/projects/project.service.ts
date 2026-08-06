import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  async findAllByUser(userId: string): Promise<Project[]> {
    return this.projectModel.find({ userId, status: 'active' }).sort({ updatedAt: -1 }).exec();
  }

  async findById(id: string): Promise<Project> {
    const project = await this.projectModel.findById(id).exec();
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return project;
  }

  async createProject(userId: string, title: string): Promise<Project> {
    const newProject = new this.projectModel({
      title: title || 'Proyek Tanpa Judul',
      userId,
      scenes: [
        {
          id: `scene-${Date.now()}`,
          name: 'Scene 1',
          duration: 5000,
          backgroundColor: '#ffffff',
          elements: [],
        },
      ],
      thumbnailUrl: '',
      status: 'active',
    });
    return newProject.save();
  }

  async updateProject(id: string, updateData: any): Promise<Project> {
    const updated = await this.projectModel
      .findByIdAndUpdate(id, { ...updateData, updatedAt: new Date() }, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException(`Project with ID ${id} not found for update`);
    }
    return updated;
  }

  async softDeleteProject(id: string): Promise<Project> {
    const deleted = await this.projectModel
      .findByIdAndUpdate(id, { status: 'trash' }, { new: true })
      .exec();
    if (!deleted) {
      throw new NotFoundException(`Project with ID ${id} not found for deletion`);
    }
    return deleted;
  }
}
