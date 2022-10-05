import React from "react";
import "../header/style.css"
import SVGHeart from "../../assets/svg/svgHeart";
import SVGMessage from "../../assets/svg/svgMessage";
import SVGInc from "../../assets/svg/svgInc";
import SVGTwitterDOP from "../../assets/svg/svgTwitterDOP";
import SVGBoolDOP from "../../assets/svg/svgBoolDOP";
import SVGFacebookDOP from "../../assets/svg/svgFacebookDOP";

function Discuss () {
    return (
        <>
            <div className={"div__discuss"}>
                <div className={"div___content"}>
                    <h1 className={"div__text"}>
                        LET’S DISCUSS
                    </h1>
                    <SVGHeart className={"heart__svg2"}/>
                    <span className={"works__text"}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <span className={"br"}><br/>quae ab illo inventore</span>
                    </span>
                </div>
                <div className={"dop-div__container"}>
                    <div className={"lorem__position"}>
                        <span className={"text_span__lorem"}>Cras at ultrices erat, sed vulputate!</span>
                        <p className={"text_p__lorem"}>
                            2345 Setwant natrer, 1234,
                            <br/>Washington. United States.
                            <br/>(401) 1234 567
                        </p>
                    </div>
                    <div className={"div-say__hello"}>
                        <div className={"contact"}>
                            <form>
                                <fieldset className={"contact"}>
                                    <legend className={"text__hello"}>Say hello!</legend>
                                    <div className={"input-field"}>
                                        <input type="text" name="name" id="name" placeholder="Name" className={"contact__form"}/>
                                    </div>
                                    <div className={"input-field1"}>
                                        <input type="email" name="email" id="email" placeholder="Email" className={"contact__form"}/>
                                    </div>
                                </fieldset>
                                <div className={"group"}>
                                    <textarea name="message" id="message" placeholder="Message" className={"contact__form"}></textarea>
                                </div>
                                <div className={"group"}>
                                    <div className={"btn__contact"}>
                                        <SVGMessage className={"div__envelope"}/>
                                        <button className={"btn__messege"}>
                                            Send Message
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className={"svg__icons"}>
                        <SVGInc className={"git__hub"}/>
                        <SVGTwitterDOP className={"git__hub"}/>
                        <SVGBoolDOP className={"git__hub"}/>
                        <SVGFacebookDOP className={"git__hub"}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Discuss