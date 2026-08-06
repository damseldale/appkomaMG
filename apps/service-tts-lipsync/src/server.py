from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from tts_engine.generator import TTSGenerator
from tts_engine.voices_model import VoicesRegistry
from lipsync.waveform_analyzer import WaveformAnalyzer
from lipsync.viseme_mapper import VisemeMapper

app = FastAPI(title="TTS & Lipsync Service", version="1.0.0")
tts_generator = TTSGenerator()

class TTSRequest(BaseModel):
    text: str
    voice_id: str = "en-US-Standard-A"

@app.get("/health")
def health_check():
    return {"status": "Service TTS & Lipsync is running smoothly", "timestamp": "2026-08-06"}

@app.get("/voices")
def list_voices():
    return VoicesRegistry.get_available_voices()

@app.post("/generate-speech")
async def generate_speech(payload: TTSRequest):
    try:
        file_path = await tts_generator.generate_speech(payload.text, payload.voice_id)
        
        # Baca kembali file audio untuk dianalisis visemenya
        with open(file_path, "rb") as f:
            audio_bytes = f.read()
            
        peaks = WaveformAnalyzer.analyze_audio_stream(audio_bytes)
        visemes = VisemeMapper.map_peaks_to_visemes(peaks)

        return {
            "audio_file": file_path,
            "text": payload.text,
            "voice_id": payload.voice_id,
            "visemes": visemes
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=4004, reload=True)
