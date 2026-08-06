import { useSceneStore } from "./sceneStore";

import type {
  ObjectId,
  SceneObject,
} from "../types/Object";

/**
 * Seluruh object pada scene sesuai urutan layer.
 */
export function useSceneObjects(): SceneObject[] {
  return useSceneStore((state) =>
    state.rootIds
      .map((id) => state.objects[id])
      .filter(Boolean)
  );
}

/**
 * Dictionary object.
 */
export function useSceneObjectMap() {
  return useSceneStore((state) => state.objects);
}

/**
 * Mengambil satu object berdasarkan id.
 */
export function useSceneObject(
  id: ObjectId
): SceneObject | undefined {
  return useSceneStore(
    (state) => state.objects[id]
  );
}

/**
 * Object yang sedang dipilih.
 */
export function useSelectedObjects(): SceneObject[] {
  return useSceneStore((state) =>
    state.selectedIds
      .map((id) => state.objects[id])
      .filter(Boolean)
  );
}

/**
 * ID object yang sedang dipilih.
 */
export function useSelectedIds(): ObjectId[] {
  return useSceneStore(
    (state) => state.selectedIds
  );
}

/**
 * Mengecek apakah object sedang dipilih.
 */
export function useIsSelected(
  id: ObjectId
): boolean {
  return useSceneStore((state) =>
    state.selectedIds.includes(id)
  );
}

/**
 * Jumlah object.
 */
export function useObjectCount(): number {
  return useSceneStore(
    (state) => state.rootIds.length
  );
}
