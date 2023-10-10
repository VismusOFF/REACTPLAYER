import React from "react";
import "./searchstyle.css";
import SearchSvg from "./svgSearch.js";

function Search() {
    return (
            <div className="search-frame">
                <div className="search-icon">
                    <SearchSvg/>
                </div>

                <div className="search">
                    Search
                </div>
            </div>
    )
}

export default Search