import { Injectable, NotFoundException } from '@nestjs/common';

export interface TemplateItem {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  scenes: Array<any>;
}

@Injectable()
export class TemplateService {
  // Data tiruan awal untuk templat siap pakai
  private templates: TemplateItem[] = [
    {
      id: 'tpl-1',
      title: 'Explainer Video SaaS',
      category: 'Business',
      thumbnailUrl: 'https://via.placeholder.com/300x180',
      scenes: [
        { id: 'sc-1', name: 'Intro', duration: 5000, backgroundColor: '#10101E', elements: [] },
      ],
    },
    {
      id: 'tpl-2',
      title: 'Social Media Promo',
      category: 'Marketing',
      thumbnailUrl: 'https://via.placeholder.com/300x180',
      scenes: [
        { id: 'sc-1', name: 'Promo Hook', duration: 4000, backgroundColor: '#161629', elements: [] },
      ],
    },
  ];

  async findAll(): Promise<TemplateItem[]> {
    return this.templates;
  }

  async findById(id: string): Promise<TemplateItem> {
    const template = this.templates.find((t) => t.id === id);
    if (!template) {
      throw new NotFoundException(`Template with ID ${id} not found`);
    }
    return template;
  }
}
