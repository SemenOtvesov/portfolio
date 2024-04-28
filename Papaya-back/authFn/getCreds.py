import google_auth_oauthlib.flow
from constants import SCOPES

def getCreds(code, state):
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
        'client_secret.json',
        scopes=SCOPES,
        state = state,
        redirect_uri = 'http://localhost:3000'
    )
    flow.fetch_token(code=code)

    with open('creds.json', 'w') as outfile:
        outfile.write(flow.credentials.to_json())
    return flow.credentials