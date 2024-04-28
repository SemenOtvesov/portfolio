from authFn.getCreds import getCreds
from authFn.authorize import authorize
from googleapiclient.discovery import build
from authFn.checkValidCreds import chechValidCreds

def getService(code):
    creds = [None]
    state = [None]
    if(code):
        validCredsObj = chechValidCreds()
        if (validCredsObj["state"] == False):
            state[0] = authorize()
            creds[0] = getCreds(code, state[0])
        else:
            creds[0] = validCredsObj["creds"]

        return build('youtube', 'v3', credentials=creds[0])
    else:
        state[0] = authorize()