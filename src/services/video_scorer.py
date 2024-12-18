import google.generativeai as genai
import os
import requests
from fastapi import HTTPException
from ..models.schemas import VideoRequest, VideoResponse, Scoring, Metadata, Resolution
from ..utils.llm_helpers import upload_to_gemini, wait_for_files_active, safety_settings, gemini_generation_config
from ..utils.helpers import download_file


genai.configure(api_key=os.environ["GEMINI_API_KEY"])
class VideoScorer:
    def __init__(self, video_path: str, video_request: VideoRequest):
        self.video_path = video_path
        self.video_request = video_request
        generation_config = {
                "temperature": 1,
                "top_p": 0.95,
                "top_k": 40,
        }
        self.llm =  genai.GenerativeModel(
                        model_name="gemini-2.0-flash-exp",
                        generation_config=gemini_generation_config,
                        safety_settings=safety_settings,
                        system_instruction=
f"""You will be given the following information by the user:
- product_name : The name of the product
- tagline: The tagline of the product
- brand_palette : A list of colors that the brand uses
- cta_text : The call to action text
- brand_logo : The brand logo
- a video creative of the product
- scoring_criteria: The criteria for scoring the video

Now based on the criteria, and the information provided, you need to score the video on the given scale.
"""
                    )
    def score_video(self) -> VideoResponse:
        ...


        