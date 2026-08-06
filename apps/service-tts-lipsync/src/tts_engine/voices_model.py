from pydantic import BaseModel
from typing import List

class VoiceProfile(BaseModel):
    id: str
    name: str
    language: str
    gender: str
    preview_url: str

class VoicesRegistry:
    @staticmethod
    def get_available_voices() -> List[VoiceProfile]:
        return [
            VoiceProfile(
                id="en-US-Standard-A",
                name="Alex (US Male)",
                language="en-US",
                gender="male",
                preview_url="https://example.com/audio/alex_preview.mp3"
            ),
            VoiceProfile(
                id="en-US-Standard-B",
                name="Sarah (US Female)",
                language="en-US",
                gender="female",
                preview_url="https://example.com/audio/sarah_preview.mp3"
            ),
            VoiceProfile(
                id="id-ID-Standard-A",
                name="Budi (ID Male)",
                language="id-ID",
                gender="male",
                preview_url="https://example.com/audio/budi_preview.mp3"
            )
        ]
