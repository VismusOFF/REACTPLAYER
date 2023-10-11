import React from "react";
import "./trackinstyle.css";

function Trackin() {
    return (
            <div className="main-track-frame">
                <div className="number-name-icon-frame">
                    <div className="number-track1">
                        1
                    </div>

                    <div>
                        <img className="icon-track" src="OVERANDOUT.jpg"/>
                    </div>

                    <div className="info-track">
                        <div className="name-track-1">
                            Track1
                        </div>

                        <div className="author-track">
                            Author1
                        </div>
                    </div>
                </div>


                <div className="date-time-track">
                    <div className="date">
                        09.10.2023
                    </div>


                    <div className="time1">
                        2:10
                    </div>
                </div>
            </div>
    )
}

export default Trackin