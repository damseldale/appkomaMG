export type ElementType = 'shape' | 'text' | 'image' | 'character' | 'prop';

export interface BaseCanvasElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  zIndex: number;
}

export interface TextElement extends BaseCanvasElement {
  type: 'text';
  content: string;
  fontSize: number;
  fontFamily: string;
  fontColor: string;
  fontWeight: string;
  textAlign?: 'left' | 'center' | 'right';
}

export interface ShapeElement extends BaseCanvasElement {
  type: 'shape';
  shapeType: 'rectangle' | 'circle' | 'triangle' | 'star';
  fillColor: string;
  strokeColor?: string;
  strokeWidth?: number;
  cornerRadius?: number;
}

export interface AssetElement extends BaseCanvasElement {
  type: 'image' | 'character' | 'prop';
  assetUrl: string;
  config?: {
    skinTone?: string;
    hairStyle?: string;
    outfit?: string;
    expression?: string;
    [key: string]: any;
  };
}

export type CanvasElement = TextElement | ShapeElement | AssetElement;
