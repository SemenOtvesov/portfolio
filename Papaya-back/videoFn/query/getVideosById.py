from videoFn.getChanelsInfo import getChanelsInfo

def getVideos(service, searchObjVideos):
    idList = []
    for video in searchObjVideos['items']:
        idList.append(video['id']['videoId'])

    videos = service.videos().list(
        part="id, snippet, statistics, contentDetails, player",
        id=",".join(idList)
    ).execute()
    return  videos

def getVideosById(service, searchObjVideos, fullInfoCheck):
    videos = getVideos(service, searchObjVideos)
    chanelsInfo = getChanelsInfo(service, videos)

    combineVideos = []
    for itemId, videosItem in enumerate(videos['items']):
        snippet = videosItem.get('snippet')

        chanelPreview = chanelsInfo[0]['url']
        chanelSubscriptions = chanelsInfo[0]['subscriptions']

        for chanel in chanelsInfo:
            if(snippet["channelId"] == chanel['chanelId']):
                chanelPreview = chanel['url']
                chanelSubscriptions = chanel['subscriptions']

        video = {
                'id': videosItem.get('id'),
                'preview': snippet.get('thumbnails').get('medium').get('url'),
                'title': snippet.get('localized').get('title'),
                'publishedAt': snippet.get('publishedAt'),
                'channelTitle': snippet.get('channelTitle'),
                'channelId': snippet.get('channelId'),
                'chanelPreview': chanelPreview,
                'viewCount': videosItem.get('statistics').get('viewCount'),
                'duration': videosItem.get('contentDetails').get('duration')
            }
        if(fullInfoCheck):
            print(videosItem)
            video.update({
                'chanelSubscriptions': chanelSubscriptions,
                'likeCount': videosItem.get('statistics').get('likeCount'),
                'commentCount': videosItem.get('statistics').get('commentCount'),
                'description': snippet.get('description'),
                'player': videosItem.get('player').get('embedHtml')
            })
        combineVideos.append(video)

    return  combineVideos