import React from "react";
import "./playliststyle.css";

function Playlist1() {
    return (
        <div className="playlist-frame">
            <div>
                <img className="img-playlist" src="GULU9.jpg"/>
            </div>
            <div className="name-frame">

                <div className="name-playlist">
                    Myplaylist
                </div>

                <div className="name-playlist-user">
                    Playlist ● User 
                </div>

            </div>
        </div>
    )
}

export default Playlist1