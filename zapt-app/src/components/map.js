import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Map extends Component {
    render() {
        const placeId = process.env.REACT_APP_PLACE_ID;
        const apiKey = process.env.REACT_APP_API_KEY;
        const iframeSrc = `https://app.zapt.tech/#/map?placeId=${placeId}&embed=true&apiKey=${apiKey}`;
        return (
            <div>
                <iframe src={iframeSrc} title="Map" width="100%" height="600"></iframe>
            </div>
        )
    }
}