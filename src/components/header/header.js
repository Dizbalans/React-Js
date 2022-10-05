import React from "react";
import "./style.css"
import Logo from "../../assets/images/logo.png"
import Button from "./button";

function Header () {
    return (
        <>
        <div className={"header"}>
            <img className={"logo__position"} src={Logo} alt="alt"/>
            <Button/>
        </div>
        </>
    )
}
export default Header
