import { Injectable, NotFoundException } from '@nestjs/common';

export interface CharacterAsset {
  id: string;
  name: string;
  gender: 'male' | 'female' | 'neutral';
  defaultConfig: {
    skinTone: string;
    hairStyle: string;
    outfit: string;
  };
  previewUrl: string;
  createdAt: Date;
}

@Injectable()
export class CharacterService {
  private characters: CharacterAsset[] = [
    {
      id: 'char-1',
      name: 'Alex (Business Casual)',
      gender: 'male',
      defaultConfig: {
        skinTone: '#E0AC69',
        hairStyle: 'Short Hair',
        outfit: 'Formal Suit & Tie',
      },
      previewUrl: 'https://via.placeholder.com/200x300',
      createdAt: new Date(),
    },
    {
      id: 'char-2',
      name: 'Sarah (Casual Developer)',
      gender: 'female',
      defaultConfig: {
        skinTone: '#F5D0B1',
        hairStyle: 'Long Hair',
        outfit: 'Casual Hoodie & Jeans',
      },
      previewUrl: 'https://via.placeholder.com/200x300',
      createdAt: new Date(),
    },
  ];

  async findAll(): Promise<CharacterAsset[]> {
    return this.characters;
  }

  async findById(id: string): Promise<CharacterAsset> {
    const character = this.characters.find((c) => c.id === id);
    if (!character) {
      throw new NotFoundException(`Character asset with ID ${id} not found`);
    }
    return character;
  }

  async createCharacter(data: Omit<CharacterAsset, 'id' | 'createdAt'>): Promise<CharacterAsset> {
    const newCharacter: CharacterAsset = {
      id: `char-${Date.now()}`,
      ...data,
      createdAt: new Date(),
    };
    this.characters.push(newCharacter);
    return newCharacter;
  }
}
