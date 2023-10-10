import React from "react";
import "./homestyle.css";
import HomeSvg from "./svgHome";

function Home() {
    return (
        <div className="home-frame">
            <div className="home-icon">
                <HomeSvg/>
            </div>
            <div className="home">
                Home
            </div>
        </div>
    )
}

export default Home