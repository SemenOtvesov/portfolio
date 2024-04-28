def getChanelsInfo(service, videos):
    chanelIdList = []
    for item in videos['items']:
        chanelIdList.append(item['snippet']['channelId'])
    chanels = service.channels().list(
        part="snippet,statistics",
        maxResults=50,
        id=",".join(chanelIdList)
    ).execute()

    chanelsInfo = []
    for chanel in chanels['items']:
        snippet = chanel['snippet']
        chanelItem = {
            "url": snippet['thumbnails']['default']['url'],
            "chanelId": chanel['id'],
            "subscriptions": chanel['statistics']['subscriberCount']
        }
        chanelsInfo.append(chanelItem)

    return chanelsInfo
