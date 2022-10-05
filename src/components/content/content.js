import React from "react";
import "../header/style.css"
import Banner from "../../../src/assets/images/banner.jpg"
import SVGTwitter from "../../assets/svg/svgTwitter";
import SVGFacebook from "../../assets/svg/svgFacebook";
import SVGGoogle from "../../assets/svg/svgGoogle";
import SVGBool from "../../assets/svg/svgBool";

function Content () {
    return (
        <>
            <div className={"background__img"} style={{backgroundImage: "url(" + Banner + ")"}}>
                <div className={"background__text"}>
                    <h1 className={"text"}>Meet <span className={"color"}>Brandi</span>!</h1>
                    <h2 className={"text"}><span className={"color1"}>/creative</span>one page template.</h2>
                    <p className={"text-p"}><span className={"color1"}>-</span>We are a team of professionals <span className={"color1"}>-</span></p>
                </div>
                <div className={"position__svg"}>
                    <SVGTwitter className={"twitter__svg"} />
                    <SVGFacebook className={"facebook__svg"}/>
                    <SVGGoogle className={"google__svg"}/>
                    <SVGBool className={"dribbble__svg"}/>
                </div>
            </div>
        </>
    )
}
export default Content
