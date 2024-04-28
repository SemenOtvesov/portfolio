import json
def searchQuery(service, query):
   return service.search().list(
        part="snippet",
        maxResults=50,
        q=query,
        type='video',
       videoDuration='medium'
    ).execute()