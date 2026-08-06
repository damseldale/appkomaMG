import { Injectable, NotFoundException } from '@nestjs/common';
import { Asset } from './asset.model';

@Injectable()
export class PropService {
  private props: Asset[] = [
    {
      id: 'prop-1',
      name: 'Modern Laptop',
      category: 'prop',
      fileUrl: 'https://via.placeholder.com/300',
      thumbnailUrl: 'https://via.placeholder.com/150',
      tags: ['office', 'tech', 'work'],
      createdAt: new Date(),
    },
    {
      id: 'prop-2',
      name: 'Coffee Mug',
      category: 'prop',
      fileUrl: 'https://via.placeholder.com/300',
      thumbnailUrl: 'https://via.placeholder.com/150',
      tags: ['office', 'drink'],
      createdAt: new Date(),
    },
  ];

  async findAll(): Promise<Asset[]> {
    return this.props;
  }

  async findById(id: string): Promise<Asset> {
    const prop = this.props.find((p) => p.id === id);
    if (!prop) {
      throw new NotFoundException(`Prop with ID ${id} not found`);
    }
    return prop;
  }

  async createProp(data: Omit<Asset, 'id' | 'createdAt' | 'category'>): Promise<Asset> {
    const newProp: Asset = {
      id: `prop-${Date.now()}`,
      category: 'prop',
      ...data,
      createdAt: new Date(),
    };
    this.props.push(newProp);
    return newProp;
  }
}
