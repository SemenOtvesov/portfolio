def getMostPopularVideo(service, pageTokenId):
    req = service.videos().list(
        part="id, snippet, statistics, contentDetails",
        chart="mostPopular",
        regionCode="RU",
        maxResults='50',
        pageToken=pageTokenId or '',
    ).execute()
    return {'req': req.get('items', []), 'nextPageToken': req.get('nextPageToken', '')}