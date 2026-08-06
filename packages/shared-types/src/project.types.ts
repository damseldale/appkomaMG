import { CanvasElement } from './canvas.types';

export interface Scene {
  id: string;
  name: string;
  duration: number; // dalam milidetik
  backgroundColor: string;
  elements: CanvasElement[];
}

export interface Project {
  id: string;
  title: string;
  userId: string;
  thumbnailUrl?: string;
  scenes: Scene[];
  status: 'active' | 'trash';
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectDto {
  title: string;
}

export interface UpdateProjectDto {
  title?: string;
  scenes?: Scene[];
  thumbnailUrl?: string;
  status?: 'active' | 'trash';
}
