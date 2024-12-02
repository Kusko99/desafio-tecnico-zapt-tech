import React, { Component } from "react";
import env from "react-dotenv";

export default class Map extends Component {
    render() {
        const placeId = env.PLACE_ID;
        const apiKey = env.API_KEY;
        const iframeSrc = `https://app.zapt.tech/#/map?placeId=${placeId}&search=false&apiKey=${apiKey}`;
        return (
            <div>
                <iframe className="flex-grow-1" src={iframeSrc} title="Map" width="100%" height="600"></iframe>
            </div>
        );
    }
}
