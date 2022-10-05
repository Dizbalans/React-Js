import React from "react";
import "../header/style.css"
import Logo from "../../assets/images/logo.png"

function Footer () {
    return (
        <>
            <div className={"footer"}>
                <div className={"dop__footer"}>
                    <div className={"brandi__div"}>
                        <img className={"logo__footer"} src={Logo} alt="alt"/>
                        <span className={"bi"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam aspernatur aut cupiditate dignissimos distinctio et excepturi harum impedit, ipsum magnam magni nesciunt officia quia reprehenderit sapiente sed veniam, voluptatibus?</span>
                    </div>
                    <div className={"sub__div"}>
                        <span className={"text__sub-div"}>subscribe</span>
                        <div className={"input__div"}>
                            <input type="text" name="name" placeholder="" className={"btn__sub-div"}/>
                        </div>
                        <p className={"text-dop__div"}>eusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={"explore"}>
                        <span className={"text__sub-div"}>explore</span>
                        <button className={"btn__text2"}>Inside Us</button>
                        <button className={"btn__text2"}>Flickr</button>
                        <button className={"btn__text2"}>Google</button>
                        <button className={"btn__text2"}>Forum</button>
                    </div>
                    <div className={"support"}>
                        <span className={"text__sub-div"}>explore</span>
                        <button className={"btn__text2"}>Inside Us</button>
                        <button className={"btn__text2"}>Flickr</button>
                        <button className={"btn__text2"}>Google</button>
                        <button className={"btn__text2"}>Forum</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer