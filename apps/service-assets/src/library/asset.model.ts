export interface Asset {
  id: string;
  name: string;
  category: 'prop' | 'character' | 'audio' | 'background';
  fileUrl: string;
  thumbnailUrl?: string;
  tags?: string[];
  createdAt: Date;
}
