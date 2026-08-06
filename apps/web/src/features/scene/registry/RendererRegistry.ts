import type { ComponentType } from "react";

import type {
  SceneObject,
  ObjectType,
} from "../types/Object";

export interface ObjectRendererProps<
  TObject extends SceneObject = SceneObject,
> {
  object: TObject;
}

export type ObjectRendererComponent<
  TObject extends SceneObject = SceneObject,
> = ComponentType<ObjectRendererProps<TObject>>;

class RendererRegistry {
  private renderers =
    new Map<ObjectType, ObjectRendererComponent>();

  register(
    type: ObjectType,
    renderer: ObjectRendererComponent
  ) {
    this.renderers.set(type, renderer);
  }

  unregister(type: ObjectType) {
    this.renderers.delete(type);
  }

  get(type: ObjectType) {
    return this.renderers.get(type);
  }

  has(type: ObjectType) {
    return this.renderers.has(type);
  }

  clear() {
    this.renderers.clear();
  }
}

export const rendererRegistry =
  new RendererRegistry();
