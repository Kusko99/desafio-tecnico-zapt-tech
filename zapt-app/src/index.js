import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from "./components/view";
import ShopsDetailed from "./components/ShopDetailed";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<View />} />
                <Route path="/details" element={<ShopsDetailed />} />
            </Routes>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
