import time
from flask import Flask
from owslib.wms import WebMapService

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.rout('/getTreeImage')
def get_tree_image(lat, lng):
    wms_url = 'https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/HighResolution'
    wms = WebMapService(wms_url, version='1.1.1')
    img = wms.getmap(layers=['Raster'], 
                styles=['default'],
                srs='EPSG:4326',
                bbox=(lng-0.0001,lat-0.0001,lng+0.0001,lat+0.0001), #lon = x lat = y
                size=(256,256),
                format='image/png')
    print(img)
