import base64
import os,io
from flask import Flask, request, jsonify, Response,make_response, send_file
from flask_cors import CORS, cross_origin
from owslib.wms import WebMapService
import requests

app = Flask(__name__)
CORS(app, origins=[])
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/getTreeImage/', methods=['GET'])
@cross_origin(origins=[])
def get_tree_image():
    lat = 0.0
    lng = 0.0
    if request.args.get("lat") is not None:
        lat = float(request.args.get("lat"))
    if request.args.get("lng") is not None:
        lng = float(request.args.get("lng"))
    if lat!=0.0 and lng!=0.0:
        wms_url = 'https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/HighResolution'
        wms = WebMapService(wms_url, version='1.1.1')
        img = wms.getmap(layers=['Raster'], 
                    styles=['default'],
                    srs='EPSG:4326',
                    bbox=(lng-0.00013,lat-0.0001,lng+0.00013,lat+0.0001), #lon = x lat = y
                    size=(256,256),
                    format='image/png')
        return jsonify(imageB64 = str(base64.b64encode(img.read()))[2:-1])
    else:
        return Response(status=400)


@app.route('/getGoogleImage/', methods=['GET'])
@cross_origin(origins=[])
def getGoogleImage():
    lat = 0.0
    lng = 0.0
    if request.args.get("lat") is not None:
        lat = float(request.args.get("lat"))
    if request.args.get("lng") is not None:
        lng = float(request.args.get("lng"))
    endpoint = f'https://maps.googleapis.com/maps/api/staticmap?center={lat},{lng}&zoom=20&scale=2&size=600x600&maptype=satellite&key=AIzaSyDuWOOm87SUMP2w2JxSkxAlPzVRKIe3fZY'
    response = requests.get(endpoint)
    if lat!=0.0 and lng!=0.0:
        return jsonify(imageB64 = str(base64.b64encode(response.content))[2:-1])
    else:
        return Response(status=400)