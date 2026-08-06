export interface Transform {
  x: number;
  y: number;

  rotation: number;

  scaleX: number;
  scaleY: number;

  skewX: number;
  skewY: number;
}

export const DEFAULT_TRANSFORM: Transform = {
  x: 0,
  y: 0,

  rotation: 0,

  scaleX: 1,
  scaleY: 1,

  skewX: 0,
  skewY: 0,
};
