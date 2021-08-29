import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import * as Styles from "./MapBoard.styles";
import { GOOGLE_MAP_API_KEY } from "../../shared/constants";
import { useRef, useState } from "react";
import mapStyles from "../../mapStyles";
import data from "../../static/pelnabaza.json";

const libaries = ["places"];
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

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <Styles.MapWrapper>
      {/* <Styles.StyledTypo variant="h3">TREE VISION 🌳</Styles.StyledTypo> */}
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
          />
        ))}
      </GoogleMap>
    </Styles.MapWrapper>
  );
};

export default MapBoard;
