export interface SceneItem {
  id: string;
  name: string;
  duration: number; // dalam milidetik
  backgroundColor: string;
  elements: any[];
}

export class SceneCompiler {
  static compile(scenes: SceneItem[]) {
    let totalDuration = 0;
    const compiledScenes = scenes.map((scene, index) => {
      const startMs = totalDuration;
      totalDuration += scene.duration || 5000;
      return {
        index,
        id: scene.id,
        name: scene.name,
        startMs,
        endMs: totalDuration,
        backgroundColor: scene.backgroundColor || '#10101E',
        elements: scene.elements || [],
      };
    });

    return {
      totalDuration,
      scenes: compiledScenes,
      backgroundColor: compiledScenes.length > 0 ? compiledScenes[0].backgroundColor : '#10101E',
    };
  }
}
