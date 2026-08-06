export type AnimationType = 'fade-in' | 'fade-out' | 'slide-in' | 'zoom-in' | 'bounce' | 'pulse';

export interface Keyframe {
  time: number; // dalam milidetik relatif terhadap kemunculan elemen
  properties: {
    x?: number;
    y?: number;
    opacity?: number;
    scale?: number;
    rotation?: number;
  };
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export interface ElementAnimation {
  id: string;
  elementId: string;
  type: AnimationType;
  duration: number; // dalam milidetik
  delay: number; // dalam milidetik
  keyframes?: Keyframe[];
}

export interface SceneTransition {
  sceneId: string;
  type: 'fade' | 'wipe' | 'slide' | 'circle';
  duration: number;
}
