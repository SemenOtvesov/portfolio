from google.oauth2.credentials import Credentials
from constants import USER_TOKEN_FILE
import pathlib
from constants import SCOPES

def chechValidCreds():
    path = pathlib.Path(USER_TOKEN_FILE)
    creds = None
    if (path.exists()):
        creds = Credentials.from_authorized_user_file(USER_TOKEN_FILE, SCOPES)

    if not creds or not creds.valid:
        return {"state":False, "creds": creds}
    else:
        return {"state":True, "creds": creds}