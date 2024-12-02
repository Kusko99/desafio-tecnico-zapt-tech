import React from "react";
import ReactDOM from "react-dom";
import Map from "./components/map";
import Shops from "./components/shops";

const App = () => {
    return (
        <div>
            <Map />
            <Shops />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);