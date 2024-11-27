import React from "react";
import ReactDOM from "react-dom";
import Map from "./components/map";

const App = () => {
    return (
        <div>
            <h1>hello world</h1>
            <Map />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);