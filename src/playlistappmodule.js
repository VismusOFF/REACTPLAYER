import React from "react";
import "./css/playlistappmodule.css";
import Playlist1 from "./components/playlist/playlist";

function PlaylistApp() {
    return (
        <div className="main-playlist-frame">
            <Playlist1/>
            <Playlist1/>
            <Playlist1/>
            <Playlist1/>
            <Playlist1/>
        </div>
    )
}

export default PlaylistApp