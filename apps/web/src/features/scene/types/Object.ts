import type { Transform } from "./Transform";

export type ObjectId = string;

export type ObjectType =
  | "character"
  | "image"
  | "text"
  | "shape"
  | "group";

export interface BaseObject {
  id: ObjectId;

  type: ObjectType;

  name: string;

  transform: Transform;

  visible: boolean;

  locked: boolean;
}

export interface CharacterObject extends BaseObject {
  type: "character";

  characterId?: string;

  pose?: string;

  expression?: string;
}

export interface ImageObject extends BaseObject {
  type: "image";

  src: string;

  width: number;

  height: number;
}

export interface TextObject extends BaseObject {
  type: "text";

  text: string;

  fontSize: number;

  fontFamily: string;

  color: string;
}

export interface ShapeObject extends BaseObject {
  type: "shape";

  shape:
    | "rect"
    | "circle"
    | "ellipse"
    | "line"
    | "triangle";

  fill: string;

  stroke: string;

  strokeWidth: number;

  width: number;

  height: number;
}

export interface GroupObject extends BaseObject {
  type: "group";

  children: ObjectId[];
}

export type SceneObject =
  | CharacterObject
  | ImageObject
  | TextObject
  | ShapeObject
  | GroupObject;
