import google_auth_oauthlib.flow
import webbrowser, pyautogui
from constants import APP_TOKEN_FILE
from constants import SCOPES

def authorize():
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
        APP_TOKEN_FILE,
        scopes=SCOPES,
        redirect_uri = 'http://localhost:3000'
    )
    authorization_url, state = flow.authorization_url(
        access_type='offline',
        include_granted_scopes='true',
        prompt='consent'
    )
    webbrowser.open(authorization_url, new=0)
    pyautogui.hotkey('ctrl', 'w')
    
    return state