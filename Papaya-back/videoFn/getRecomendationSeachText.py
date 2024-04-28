import json

def getVideos(service, pageTokenId):
    return service.videos().list(
        part="snippet, contentDetails",
        myRating="like",
        maxResults='50',
        pageToken=pageTokenId or '',
    ).execute()


def getAllVideos(videos, pageTokenId, service):
    req = getVideos(service, pageTokenId)

    for videosItem in req['items']:
        contentDetails = videosItem.get('contentDetails')
        if (len(contentDetails.get('duration')) > 5):
            snippet = videosItem.get('snippet')
            videos.append(videosItem)
    if (len(videos) < 100):
        getAllVideos(videos, req.get('nextPageToken', ''), service)

def createTagList(categoryList):
    tagsList = []
    for categoryIter, item in enumerate(categoryList):
        titleItem = item['snippet']['title']
        titleSplit = titleItem.split('(#)')
        for title in titleSplit:
            if(title[0] == '#'):
                tagsList.extend(title.split('#'))

        if('tags' in item['snippet']):
            tagsItem = item['snippet']['tags']
            for tag in tagsItem:
                tagsList.append(tag)
    return  tagsList
def queryPopularTags(tagsList):
    counterTagsObj = {}
    for tag in tagsList:
        if(tag in counterTagsObj):
            counterTagsObj[tag] += 1
        else:
            counterTagsObj[tag] = 1
    sortedTags = sorted(counterTagsObj.items(), key=lambda item: item[1])[-10:-1]
    tagList = []
    for tag in sortedTags:
        tagList.append(tag[0])
    return tagList

def getRecomendationSeachText(service):
    videolist = []
    getAllVideos(videolist, None, service)
    tagsList =  createTagList(videolist)
    tagsList =  queryPopularTags(tagsList)
    return ' | '.join(tagsList)