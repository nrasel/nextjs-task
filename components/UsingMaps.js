import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class UsingMaps extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={{
          width: "90%",
          height: "70%",
          margin: "auto",
          marginTop: "100px",
        }}
        initialCenter={{
          lat: 37.09024,
          lng: -95.712891,
        }}
      ></Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBYFJxojhJhH3mjFKCQXGrF-o_vUdgMLt4",
})(UsingMaps);

//
