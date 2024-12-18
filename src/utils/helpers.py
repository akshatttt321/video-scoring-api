import requests
import os

def download_file(url:str, filename:str) -> str:
    """
    Downloads a file from the given url and saves it with 
    the given filename in the tmp folder in the project 
    root directory.
    """
    tmp_dir = os.path.abspath("tmp")
    if not os.path.exists(tmp_dir):
        os.makedirs(tmp_dir)
    
    filename = os.path.join(tmp_dir, filename)
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(filename, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    return filename