import React from "react";
import "../header/style.css"
import SVGHeart from "../../assets/svg/svgHeart";
import SVGGIT_Hub from "../../assets/svg/svgGIT_Hub";
import SVGPencil from "../../assets/svg/svgPencil";
import SVGGromko from "../../assets/svg/svgGromko";

function Features () {
    return (
        <>
            <div className={"div__features"}>
                <div className={"div__content"}>
                    <h1 className={"div__text"}>
                        features
                    </h1>
                </div>
                <SVGHeart/>
                <div className={"text__position"}>
                    <div className={"text__branding"}>
                        <div className={"border"}>
                            <SVGGIT_Hub className={"git__hub"}/>
                        </div>
                        <span className={"branding"}>
                            branding
                        </span>
                        <p className={"lorem__branding"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                    </div>
                    <div className={"text__development"}>
                        <div className={"border2"}>
                            <SVGPencil/>
                        </div>
                        <span className={"development"}>
                            development
                        </span>
                        <p className={"lorem__development"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                    </div>
                    <div className={"text__consulting"}>
                        <div className={"border3"}>
                            <SVGGromko/>
                        </div>
                        <span className={"consulting"}>
                            consulting
                        </span>
                        <p className={"lorem__consulting"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Features