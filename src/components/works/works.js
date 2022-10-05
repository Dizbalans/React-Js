import React from "react";
import "../header/style.css"
import Button1 from "./button1";
import Images1 from "../../assets/images/works/item-1.jpg"
import Images2 from "../../assets/images/works/item-2.jpg"
import Images3 from "../../assets/images/works/item-3.jpg"
import Images4 from "../../assets/images/works/item-4.jpg"
import Images5 from "../../assets/images/works/item-5.jpg"
import Images6 from "../../assets/images/works/item-6.jpg"
import Images7 from "../../assets/images/works/item-7.jpg"
import Images8 from "../../assets/images/works/item-8.jpg"
import SVGHeart from "../../assets/svg/svgHeart";

function WorksApp () {
    return (
        <>
            <div className={"div__works"}>
                <div className={"div__content"}>
                    <h1 className={"div__text"}>
                        works
                    </h1>
                    <SVGHeart/>
                    <span className={"works__text"}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <span className={"br"}><br/>quae ab illo inventore</span>
                    </span>
                </div>
                <Button1/>
                <div className={"pictures"}>
                    <div className={"pictures__position"}>
                        <img className={"img__hover"} src={Images1} alt="alt"/>
                        <img className={"img__hover"} src={Images2} alt="alt"/>
                        <img className={"img__hover"} src={Images3} alt="alt"/>
                        <img className={"img__hover"} src={Images4} alt="alt"/>
                        <img className={"img__hover"} src={Images5} alt="alt"/>
                        <img className={"img__hover"} src={Images6} alt="alt"/>
                        <img className={"img__hover"} src={Images7} alt="alt"/>
                        <img className={"img__hover"} src={Images8} alt="alt"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WorksApp