from authFn.getService import getService
from state.service import setServise
import json, os

def getAuth(code):
    service = getService(code)
    setServise(service)
    req = service.channels().list(
        part="snippet",
        mine=True
    ).execute()
    
    return json.dumps(req)

def delAuth():
    setServise(None)
    os.remove('creds.json')