import json

from googleapiclient.discovery import build

from videoFn.query.getVideosById import getVideosById
from state.service import getService
from constants import API_KEY
from authFn.checkValidCreds import chechValidCreds

def getRatingVideo(service, videoId):
    res = service.videos().getRating(
        id=videoId
    ).execute()
    if(res['items']):
        return res['items'][0]['rating']
    else:
        return None
def getFullInfoVideo(videoId):
    service = getService()
    userRaiting = None
    if(service == None or chechValidCreds() == False):
        service = build('youtube', 'v3', developerKey=API_KEY)
    else:
        userRaiting = getRatingVideo(service, videoId)
    combineVideos = getVideosById(service, {"items": [{"id": {"videoId": videoId}}]}, True)
    combineVideos[0].update({"userRaiting":userRaiting})
    return json.dumps(combineVideos[0])