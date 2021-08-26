import {
  GoogleMap,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
} from "google-maps-react";

const MapBoard = (props) => {
  return (
    <div>
      <GoogleMap
        style={{ width: "100%", height: "500" }}
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      ></GoogleMap>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDuWOOm87SUMP2w2JxSkxAlPzVRKIe3fZY",
})(MapBoard);
