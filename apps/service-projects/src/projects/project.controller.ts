import { Controller, Get, Post, Put, Delete, Body, Param, Req } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async findAll(@Req() req: any) {
    // Asumsi userId diambil dari token request yang diteruskan API Gateway
    const userId = req.headers['x-user-id'] || 'mock-user-id';
    return this.projectService.findAllByUser(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.projectService.findById(id);
  }

  @Post()
  async create(@Req() req: any, @Body() body: { title: string }) {
    const userId = req.headers['x-user-id'] || 'mock-user-id';
    return this.projectService.createProject(userId, body.title);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateData: any) {
    return this.projectService.updateProject(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.projectService.softDeleteProject(id);
  }
}
