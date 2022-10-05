import React from "react";
import "../header/style.css"
import Img1 from "../../assets/images/team/member-1.png"
import SVGTwitter from "../../assets/svg/svgTwitter";
import SVGFacebook from "../../assets/svg/svgFacebook";
import SVGGoogle from "../../assets/svg/svgGoogle";

function Cart1 (props) {
    const {Img}=props
    return (
        <>
            <div className={"img__team"}>
                <ul className={"hover__team"}>
                    <li className={"team1"}>
                        <img className={"img__team1"} src={Img} alt="alt"/>
                        <div className={"team__container"}>
                            <h3 className={"hover__text"}>
                                voluptatem quia voluptas
                            </h3>
                            <p className={"hover_textP"}>
                                sit aspernatur aut odit aut fugit,
                            </p>
                            <div className={"btn__position"}>
                                <button className={"btn_team1"}>
                                    <SVGTwitter/>
                                </button>
                                <button className={"btn_team1"}>
                                    <SVGFacebook/>
                                </button>
                                <button className={"btn_team1"}>
                                    <SVGGoogle/>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )

}
export default Cart1