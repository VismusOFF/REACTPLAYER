import React from "react";
import "./strokacnizystyle.css";
import Volumeicon from "./volumeicon";
import Playicon from "./playicon";
import Previcon from "./previcon";
import Nexticon from "./nexticon";
import Loopicon from "./loopicon";
import Refreshicon from "./refreshicon";

function Strokacnizy() {
    return (
            <div className="main-play-slider-volume-frame">
                <div className="otstup-sleva">
                </div>

                <div className="otsup-middle">
                    <div className="middle-frame">
                        <div className="icon-frame">
                            <div className="loop-icon">
                                <Loopicon/>
                            </div>

                            <div className="prev-icon">
                                <Previcon/>
                            </div>

                            <div className="play-icon">
                                <Playicon/>
                            </div>

                            <div className="next-icon">
                                <Nexticon/>
                            </div>

                            <div className="refresh-icon">
                                <Refreshicon/>
                            </div>
                        </div>
                        <div className="slider-time-example">

                        </div>
                    </div>
                </div>

                <div className="otstup-sprava">
                    <span className="volume">
                        <Volumeicon/>
                    </span>
                    <div className="slider-example">

                    </div>
                </div>
            </div>
    )
}

export default Strokacnizy