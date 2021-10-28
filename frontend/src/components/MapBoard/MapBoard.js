import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoBox,
} from "@react-google-maps/api";
import * as Styles from "./MapBoard.styles";
import { GOOGLE_MAP_API_KEY } from "../../shared/constants";
import { useEffect, useState } from "react";
import { mapStyles } from "../../mapStyles";
import data from "../../static/pelnabaza.json";


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
  const [treeImage, setTreeImage] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  const handleMarkerClick = async (marker) => {
    setSelected(marker);
    if (isOpen) {
      setIsOpen(false);
      setIsImageLoaded(false);
    }
    if(!props.mocked){
      console.log("obrazek z google")
      await axios
        .get("http://127.0.0.1:5000/getGoogleImage/", {
          params: {
            lat: marker.lat,
            lng: marker.lng,
          },
          headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          crossDomain: true,
        })
        .then((response) => {
          setTreeImage(response.data.imageB64)
      setIsImageLoaded(true)
      });
    }
    else{
      console.log("obrazek zmockowany")
      setIsImageLoaded(true)
    }
    setIsOpen(true);
  }

  const handleCloseInfoWindow = () => {
    setIsOpen(false);
    setIsImageLoaded(false);
  }

  return (
    <Styles.MapWrapper>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
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
            {isOpen && selected === marker ? (
              <InfoBox
                onCloseClick={() => handleCloseInfoWindow()}
                options={{
                  alignBottom: true,
                  boxStyle: {
                    boxShadow: `3px 3px 10px rgba(0,0,0,0.6)`,
                  },
                }}
              >
                <Styles.InfoContainer>
                  <h2>{selected.name}</h2>
                  {isImageLoaded ? (
                    props.mocked ? (
                      <img
                        src={"mocked/bdg_imagery/" + (marker.id) + ".0.jpg"}
                        height="256"
                        width="256"
                      ></img> ) : 
                      (<img
                        src={"data:image/png;base64, " + treeImage}
                        height="256"
                        width="256"
                      ></img>)
                  ) : null}
                </Styles.InfoContainer>
              </InfoBox>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </Styles.MapWrapper>
  );
};

export default MapBoard;
