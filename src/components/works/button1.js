import React from "react";
import "../header/style.css"
import {btnArr1} from "../../constants/mockStack";

function Button1 () {
    return (
        <div className={"btn_container"}>
            {btnArr1.map((item, index)=>{
                return <button className={"btn_text1"} key={index}>{item.name}</button>
            })}
        </div>
    )
}
export default Button1