import React, { useState } from "react";
import Map from "./map";
import Shops from "./shops";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const View = () => {
  const [showMap, setShowMap] = useState(true);
  const [showShops, setShowShops] = useState(false);

  const handleMapClick = () => {
    setShowMap(true);
    setShowShops(false);
  };

  const handleShopsClick = () => {
    setShowMap(false);
    setShowShops(true);
  };

  return (
    <div className="d-flex flex-column vh-100">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        {showMap && <Map />}
        {showShops && <Shops />}
      </div>
      <footer className="footer d-flex border-top">
          <Button className="w-100 h-100 custom-button" variant={showMap ? "primary" : "light"} onClick={handleMapClick}>
            Mapa
          </Button>
          <Button className="w-100 h-100 custom-button" variant={showShops ? "primary" : "light"} onClick={handleShopsClick}>
            Lojas
          </Button>
      </footer>
    </div>
  );
};

export default View;
