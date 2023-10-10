import React from "react";
import "./css/searchmodule.css";

function Search() {
    return (
        <div className="search-home">

            <div className="search-frame">
                <div className="search-icon">
                    <img src="searchnohover.svg"/>
                </div>

                <div className="search">
                    Search
                </div>
            </div>

            <div className="home-frame">
                <div className="home-icon">
                    <img src="homenohover.svg"/>
                </div>
                <div className="home">
                    Home
                </div>
            </div>
        </div>
    )
}

export default Search