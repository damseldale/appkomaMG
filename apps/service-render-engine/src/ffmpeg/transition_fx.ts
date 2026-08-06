export class TransitionFx {
  /**
   * Menghasilkan string filter_complex untuk efek transisi xfade antar klip video.
   */
  static getXFadeFilter(
    transitionType: 'fade' | 'wipeleft' | 'slideleft' | 'circleopen',
    durationSec: number,
    offsetSec: number
  ): string {
    return `xfade=transition=${transitionType}:duration=${durationSec}:offset=${offsetSec}`;
  }

  /**
   * Menghasilkan string filter audio crossfade untuk transisi suara yang halus.
   */
  static getAudioCrossfadeFilter(durationSec: number): string {
    return `acrossfade=d=${durationSec}:c1=tri:c2=tri`;
  }
}
