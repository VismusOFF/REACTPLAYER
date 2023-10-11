import React from "react";
import "./tracksstyle.css";
import NumberIcon from "./numbericon";
import TimeIcon from "./timeicon";
import Trackin from "./trackinplaylist";

function Track() {
    return (
            <div className="track-information">

                <div className="information">
                    <div className="number-name">
                        <div className="number-track">
                            <NumberIcon/>
                        </div>
                        
                        <div className="name-track">
                            Name
                        </div>
                    </div>
                    <div className="date-time">
                        <div className="date-track">
                            Date
                        </div>

                        <div className="time-track">
                            <TimeIcon/>
                        </div>
                    </div>
                </div>

                <div className="tracks">
                    <Trackin/>
                    <Trackin/>
                    <Trackin/>
                    <Trackin/>
                    <Trackin/>
                    <Trackin/>
                    <Trackin/>
                    <Trackin/>
                    <Trackin/>
                    <Trackin/>
                    <Trackin/>
                    <Trackin/>
                    <Trackin/>
                </div>
            </div>
    )
}

export default Track