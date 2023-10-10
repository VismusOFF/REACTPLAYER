import React from "react";
import "./css/searchmodule.css";
import Search from "./components/search/search";
import Home from "./components/home/home";

function SearchModule() {
    return (
        <div className="search-home">
                <Search/>
                <Home/>
        </div>
    )
}

export default SearchModule