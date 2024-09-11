import React, { useContext } from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Container, Map, ContactInfo } from "./styles";
import "leaflet/dist/leaflet.css";
import { AiFillPhone, MdEmail } from "../../styles/Icons";
import { ThemeContext } from "styled-components";
import { motion } from "framer-motion";

function MapComp() {
  const { title } = useContext(ThemeContext);

  const MarkerIcon = L.icon({
    iconUrl: "/static/assets/marker.png",
    iconSize: [60, 60],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      {title === "light-theme" ? (
        <Map center={[30.7333, 76.7794]} zoom={15} zoomControl={false}>
          <ContactInfo>
            <div>
              <p>Krishna Yadav,</p>
              <p>Chandigarh, India</p>
            </div>
            <div>
              <span>
                <AiFillPhone /> +91 1234567899
              </span>
              <span>
                <MdEmail className="email" /> abhi19ay@gmail.com
              </span>
            </div>
          </ContactInfo>
          <TileLayer
            url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
          />
          <Marker icon={MarkerIcon} position={[30.7333, 76.7794]}>
            <Popup>
              Krishna Yadav <br />
              Chandigarh, India
            </Popup>
          </Marker>
        </Map>
      ) : (
        <Map center={[30.7333, 76.7794]} zoom={15} zoomControl={false}>
          <ContactInfo>
            <div>
              <p>Krishna Yadav,</p>
              <p>Chandigarh, India</p>
            </div>
            <div>
              <span>
                <AiFillPhone /> +91 1234567899
              </span>
              <span>
                <MdEmail className="email" /> abhi19ay@gmail.com
              </span>
            </div>
          </ContactInfo>
          <TileLayer
            url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
          />
          <Marker icon={MarkerIcon} position={[30.7333, 76.7794]}>
            <Popup>
              Krishna Yadav <br />
              Chandigarh, India
            </Popup>
          </Marker>
        </Map>
      )}
    </Container>
  );
}

export default MapComp;
