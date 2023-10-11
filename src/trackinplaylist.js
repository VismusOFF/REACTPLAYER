import React from "react";
import "./css/trackinplaylistmodule.css";
import Track from "./components/tracks/tracks";

function TrackInPlaylist() {
    return (
        <div className="track-main-frame">
            <div className="track-icon-frame">
                <img className="track-icon" src="BESPRIDANNICA.jpg"/>
            </div>

            <div className="tracks-in-playlist">
                <Track/>
            </div>
        </div>
    )
}

export default TrackInPlaylist