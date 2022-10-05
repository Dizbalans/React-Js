import React from "react";
import "../header/style.css"
import Cart1 from "./cart1";
import Img2 from "../../assets/images/team/member-2.png"
import Img3 from "../../assets/images/team/member-3.png"
import Img1 from "../../assets/images/team/member-1.png"
import SVGHeart from "../../assets/svg/svgHeart";
function Team () {
    return (
        <>
            <div className={"div__team"}>
                <div className={"div___content"}>
                    <h1 className={"div__text"}>
                        meet our team
                    </h1>
                    <SVGHeart className={"SVGHeart"} color={"red"}/>
                    <span className={"works__text"}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <span className={"br"}><br/>quae ab illo inventore</span>
                    </span>
                </div>
                <div className={"text_Div"}>
                    <Cart1 Img={Img1}/>
                    <Cart1 Img={Img2}/>
                    <Cart1 Img={Img3}/>
                    <Cart1 Img={Img1}/>
                </div>
            </div>
            <div className={"name__team"}>
                <div className={"select__team"}>
                    <h1 className={"team__john"}>
                        John Filmr Doe
                    </h1>
                    <p className={"john__text"}>
                        Managing Director
                    </p>
                </div>
                <div className={"select__team"}>
                    <h1 className={"team__john"}>
                        Martin Matrone
                    </h1>
                    <p className={"john__text"}>
                        Lead Developer
                    </p>
                </div>
                <div className={"select__team"}>
                    <h1 className={"team__john"}>
                        Steve Flaulkin
                    </h1>
                    <p className={"john__text"}>
                        Sr. UI Designer
                    </p>
                </div>
                <div className={"select__team"}>
                    <h1 className={"team__john"}>
                        John Filmr Doe
                    </h1>
                    <p className={"john__text"}>
                        Managing Director
                    </p>
                </div>
            </div>
        </>

    )
}
export default Team