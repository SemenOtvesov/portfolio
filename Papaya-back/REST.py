from flask import Flask, request
from flask_restful import Api, Resource
from flask_cors import CORS

from index import getAuth, delAuth
from videoFn.getVideosMain import getVideosMain
from videoFn.getFullInfoVideo import getFullInfoVideo

app = Flask(__name__)
CORS(app)
api = Api()

class Auth(Resource):
    def get(self):
        return getAuth(request.args.get('code'))
    
    def delete(self):
        return delAuth()

class GetMainAuth(Resource):
    def get(self):
        return getVideosMain('Auth')

class GetMainNoAuth(Resource):
    def get(self):
        return getVideosMain('NoAuth')

class GetVideo(Resource):
    def get(self):
        videoId = request.args.get('videoId')
        return getFullInfoVideo(videoId)

api.add_resource(Auth, '/api/auth')
api.add_resource(GetMainAuth, '/api/getMainAuth')
api.add_resource(GetMainNoAuth, '/api/getMainNoAuth')
api.add_resource(GetVideo, '/api/getVideo')
api.init_app(app)

if __name__ == '__main__':
    app.run(debug=True, port=3000, host='127.0.0.1')