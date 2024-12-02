import React from "react";
import ReactDOM from "react-dom";
import View from "./components/view";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = () => {
    return (
        <div className="container-fluid d-flex flex-column vh-500">
            <View />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);