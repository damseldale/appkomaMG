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

type RendererComponent = ComponentType<ObjectRendererProps>;

class RendererRegistry {
  private renderers = new Map<
    ObjectType,
    RendererComponent
  >();

  register(
    type: ObjectType,
    renderer: RendererComponent
  ) {
    this.renderers.set(type, renderer);
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
