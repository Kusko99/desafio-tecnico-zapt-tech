import React, { useState } from 'react';
import Map from './map';
import Shops from './shops';
import Button from 'react-bootstrap/Button';

function View() {
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
        <div>
            {showMap && <Map />}
            {showShops && <Shops />}
            <button onClick={handleMapClick}>Mapa</button>
            <button onClick={handleShopsClick}>Shops</button>
        </div>
    )
}

export default View;