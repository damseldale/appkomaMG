import numpy as np

class WaveformAnalyzer:
    @staticmethod
    def analyze_audio_stream(audio_bytes: bytes) -> list:
        """
        Menganalisis buffer biner audio untuk mengekstrak puncak amplitudo dari waktu ke waktu.
        """
        chunk_count = max(10, len(audio_bytes) // 50)
        timeline_peaks = []
        
        for i in range(chunk_count):
            # Simulasi skor amplitudo antara 0.1 hingga 0.9
            amplitude = float(np.random.uniform(0.1, 0.9))
            timestamp_ms = i * 150  # interval setiap 150ms
            timeline_peaks.append({
                "timestamp_ms": timestamp_ms,
                "amplitude": round(amplitude, 2)
            })
            
        return timeline_peaks
