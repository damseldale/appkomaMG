import type {
  ObjectId,
  SceneObject,
} from "./Object";

export interface SceneState {
  objects: Record<ObjectId, SceneObject>;

  rootIds: ObjectId[];

  selectedIds: ObjectId[];
}
