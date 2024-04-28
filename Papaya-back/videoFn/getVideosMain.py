from videoFn.getAllVideos import getAllVideos
from googleapiclient.discovery import build
from state.service import getService
import json
from videoFn.getRecomendationSeachText import getRecomendationSeachText
from videoFn.getMostPopularVideo import getMostPopularVideo
from videoFn.query.searchQuery import searchQuery
from videoFn.query.getVideosById import getVideosById
from constants import API_KEY

def getVideosMain(type):
    videos = []
    service = getService()
    if(type == 'Auth'):
        if(service != None):
            searchText = getRecomendationSeachText(service)
            searchObjVideos = searchQuery(service, searchText)
            videos = getVideosById(service, searchObjVideos, False)
        else:
            noAuth(videos)
    else:
        noAuth(videos)
    return json.dumps(videos)

def noAuth(videos):
    noAuthService = build('youtube', 'v3', developerKey=API_KEY)
    getAllVideos(videos, None, noAuthService, getMostPopularVideo)