import React from "react";
import "./style.css"
import {btnArr} from "../../constants/mockData";

function Button () {
    return (
        <div className={"btnContainer"}>

            {btnArr.map((item, index)=>{
               return <button className={"btn__text"} key={index}>{item.name}</button>
            })}
        </div>

    )
}
export default Button