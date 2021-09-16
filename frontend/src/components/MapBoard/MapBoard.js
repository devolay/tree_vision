import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import * as Styles from "./MapBoard.styles";
import { GOOGLE_MAP_API_KEY } from "../../shared/constants";
import { useRef, useState, useEffect } from "react";
import { mapStyles } from "../../mapStyles";
import data from "../../static/pelnabaza.json";


const wms_url =
  "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/HighResolution?";
const libaries = ["places"];
const axios = require("axios");
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 53.125,
  lng: 18.011111,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const MapBoard = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
    libaries,
  });
  const loadData = () => JSON.parse(JSON.stringify(data));
  const [markers, setMarkers] = useState(loadData);
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  const handleMarkerClick = (marker) => {
    setSelected(marker);
    WMSGetTileUrl(marker.lat, marker.lng);
    if(isOpen){
      setIsOpen(false);
    }
    setIsOpen(true);
  }

  function WMSGetTileUrl(lat, lng) {
    var version = "1.1.1";
    var request = "GetMap";
    var format = "image/png";
    var layers = "Raster";
    var srs = "EPSG:4326";
    var bbox = lng-0.0001 + "," + lat-0.0001 + "," + lng+0.0001 + "," + lat+0.0001;
    var width = 256;
    var height = 256;
    var styles = "default";
    var url =
      wms_url +
      "version=" +
      version +
      "&request=" +
      request +
      "&Layers=" +
      layers +
      "&Styles=" +
      styles +
      "&SRS=" +
      srs +
      "&BBOX=" +
      bbox +
      "&width=" +
      width +
      "&height=" +
      height +
      "&format="
      + format;

    return url;
  }

  return (
    <Styles.MapWrapper>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{
              lat: parseFloat(marker.lat),
              lng: parseFloat(marker.lng),
            }}
            icon={{
              url: "/tree.png",
              scaledSize: new window.google.maps.Size(32, 32),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(16, 16),
            }}
            onClick={() => {
              handleMarkerClick(marker);
            }}
          >
            {isOpen && selected===marker ? (
              <InfoWindow>
                <div>
                  <h2>{selected.name}</h2>
                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </Styles.MapWrapper>
  );
};

export default MapBoard;
