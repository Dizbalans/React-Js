import React from "react";
import "../header/style.css"
import Parallax from "../../assets/images/parallax/city.jpg";
import SVGPencilNext from "../../assets/svg/svgPencilNext";
import SVGPeople from "../../assets/svg/svgPeople";
import SVGClock from "../../assets/svg/svgClock";
import SVGCoffee from "../../assets/svg/svgCoffee";
import SVGHeart from "../../assets/svg/svgHeart";

function Facts () {
    return (
        <>
            <div className={"div__facts"} style={{backgroundImage: "url(" + Parallax + ")"}}>
                <div className={"div__color"}>
                    <div className={"div___content"}>
                        <h1 className={"div__text"}>
                            meet our team
                        </h1>
                        <SVGHeart className={"heart__svg1"}/>
                    </div>
                    <div className={"container__svg"}>
                        <div className={"div__items"}>
                            <SVGClock className={"git__hub"}/>
                        </div>
                        <div className={"div__items"}>
                            <SVGPeople className={"git__hub"}/>
                        </div>
                        <div className={"div__items"}>
                            <SVGPencilNext className={"git__hub"}/>
                        </div>
                        <div className={"div__items"}>
                            <SVGCoffee className={"git__hub"}/>
                        </div>
                    </div>
                    <div className={"dop-text__content"}>
                        <div className={"text__container"}>
                            <span className={"text__span"}>3200</span>
                            <span className={"hours__work"}>hours of work</span>
                        </div>
                        <div className={"text__container"}>
                            <span className={"text__span1"}>120</span>
                            <span className={"hours__work"}>SATISFIED CLIENTS</span>
                        </div>
                        <div className={"text__container"}>
                            <span className={"text__span"}>360</span>
                            <span className={"hours__work"}>PROJECTS DELIVERED</span>
                        </div>
                        <div className={"text__container"}>
                            <span className={"text__span"}>6454</span>
                            <span className={"hours__work"}>AWARDS WON</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Facts