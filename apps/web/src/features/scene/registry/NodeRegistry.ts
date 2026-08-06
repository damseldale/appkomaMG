import type Konva from "konva";

import type { ObjectId } from "../types/Object";

class NodeRegistry {
  private nodes = new Map<ObjectId, Konva.Node>();

  register(
    id: ObjectId,
    node: Konva.Node
  ) {
    this.nodes.set(id, node);
  }

  unregister(id: ObjectId) {
    this.nodes.delete(id);
  }

  get(
    id: ObjectId
  ): Konva.Node | undefined {
    return this.nodes.get(id);
  }

  has(id: ObjectId): boolean {
    return this.nodes.has(id);
  }

  getMany(
    ids: ObjectId[]
  ): Konva.Node[] {
    return ids
      .map((id) => this.nodes.get(id))
      .filter(
        (
          node
        ): node is Konva.Node =>
          node !== undefined
      );
  }

  clear() {
    this.nodes.clear();
  }
}

export const nodeRegistry =
  new NodeRegistry();
