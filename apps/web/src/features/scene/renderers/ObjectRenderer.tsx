import React from "react";

import type {
  SceneObject,
} from "../types/Object";

import {
  rendererRegistry,
} from "../registry";

export interface ObjectRendererProps {
  object: SceneObject;
}

export function ObjectRenderer({
  object,
}: ObjectRendererProps) {
  const Renderer = rendererRegistry.get(
    object.type
  );

  if (!Renderer) {
    console.warn(
      `Renderer "${object.type}" belum didaftarkan.`
    );

    return null;
  }

  return <Renderer object={object} />;
}

export default ObjectRenderer;
