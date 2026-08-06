import { Controller, Get, Param } from '@nestjs/common';
import { TemplateService } from './template.service';

@Controller('templates')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Get()
  async findAll() {
    return this.templateService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.templateService.findById(id);
  }
}
