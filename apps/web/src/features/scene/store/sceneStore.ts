import { create } from "zustand";

import type {
  ObjectId,
  SceneObject,
} from "../types/Object";

import type {
  SceneState,
} from "../types/Scene";

import type {
  Transform,
} from "../types/Transform";

export interface SceneStore extends SceneState {
  addObject: (object: SceneObject) => void;

  removeObject: (id: ObjectId) => void;

  updateObject: (
    id: ObjectId,
    updater: (object: SceneObject) => SceneObject
  ) => void;

  updateTransform: (
    id: ObjectId,
    transform: Partial<Transform>
  ) => void;

  setSelection: (ids: ObjectId[]) => void;

  clearSelection: () => void;

  bringToFront: (id: ObjectId) => void;

  sendToBack: (id: ObjectId) => void;

  clearScene: () => void;
}

export const useSceneStore = create<SceneStore>((set) => ({
  objects: {},

  rootIds: [],

  selectedIds: [],

  addObject: (object) =>
    set((state) => ({
      objects: {
        ...state.objects,
        [object.id]: object,
      },

      rootIds: [...state.rootIds, object.id],
    })),

  removeObject: (id) =>
    set((state) => {
      const objects = { ...state.objects };

      delete objects[id];

      return {
        objects,

        rootIds: state.rootIds.filter(
          (objectId) => objectId !== id
        ),

        selectedIds: state.selectedIds.filter(
          (objectId) => objectId !== id
        ),
      };
    }),

  updateObject: (id, updater) =>
    set((state) => {
      const object = state.objects[id];

      if (!object) {
        return state;
      }

      return {
        objects: {
          ...state.objects,
          [id]: updater(object),
        },
      };
    }),

  updateTransform: (id, transform) =>
    set((state) => {
      const object = state.objects[id];

      if (!object) {
        return state;
      }

      return {
        objects: {
          ...state.objects,
          [id]: {
            ...object,
            transform: {
              ...object.transform,
              ...transform,
            },
          },
        },
      };
    }),

  setSelection: (ids) =>
    set({
      selectedIds: ids,
    }),

  clearSelection: () =>
    set({
      selectedIds: [],
    }),

  bringToFront: (id) =>
    set((state) => ({
      rootIds: [
        ...state.rootIds.filter(
          (objectId) => objectId !== id
        ),
        id,
      ],
    })),

  sendToBack: (id) =>
    set((state) => ({
      rootIds: [
        id,
        ...state.rootIds.filter(
          (objectId) => objectId !== id
        ),
      ],
    })),

  clearScene: () =>
    set({
      objects: {},

      rootIds: [],

      selectedIds: [],
    }),
}));
