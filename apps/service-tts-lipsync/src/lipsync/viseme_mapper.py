class VisemeMapper:
    """
    Memetakan puncak amplitudo suara ke viseme (bentuk mulut) standar animasi:
    'sil' (diam), 'A', 'E', 'I', 'O', 'U', 'MBP' (bibir tertutup).
    """
    @classmethod
    def map_peaks_to_visemes(cls, peaks: list) -> list:
        viseme_timeline = []
        for peak in peaks:
            amplitude = peak.get("amplitude", 0.0)
            timestamp_ms = peak.get("timestamp_ms", 0)
            
            # Pemetaan heuristik berdasarkan intensitas amplitudo
            if amplitude < 0.2:
                viseme = 'sil'
            elif amplitude < 0.4:
                viseme = 'MBP'
            elif amplitude < 0.6:
                viseme = 'E'
            elif amplitude < 0.8:
                viseme = 'A'
            else:
                viseme = 'O'
                
            viseme_timeline.append({
                "timestamp_ms": timestamp_ms,
                "viseme": viseme,
                "weight": amplitude
            })
            
        return viseme_timeline
