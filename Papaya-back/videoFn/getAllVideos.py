from videoFn.getChanelsInfo import getChanelsInfo

def getAllVideos(videos, pageTokenId, service, getVideos):
    req = getVideos(service, pageTokenId)
    chanelsPreview = getChanelsInfo(service, {'items': req['req']})

    for videosItem in req.get('req'):
        contentDetails = videosItem.get('contentDetails')
        if (len(contentDetails.get('duration')) > 5):
            snippet = videosItem.get('snippet')

            chanelPreview = chanelsPreview[0]['url']
            for chanel in chanelsPreview:
                if (snippet["channelId"] == chanel['chanelId']):
                    chanelPreview = chanel['url']

            videos.append({
                'id': videosItem.get('id'),
                'preview': snippet.get('thumbnails').get('medium').get('url'),
                'title': snippet.get('localized').get('title'),
                'publishedAt': snippet.get('publishedAt'),
                'channelTitle': snippet.get('channelTitle'),
                'channelId': snippet.get('channelId'),
                'viewCount': videosItem.get('statistics').get('viewCount'),
                'duration': videosItem.get('contentDetails').get('duration'),
                'chanelPreview': chanelPreview,
            })
    if (len(videos) < 20):
        getAllVideos(videos, req.get('pageTokenId'), service, getVideos)