import React from "react";

function SVGPeople(props) {
    const {className}= props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="git__hub"
            viewBox="0 0 16 16"
            className={className}
        >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6z"></path>
            <path
                fillRule="evenodd"
                d="M5.216 14A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
            ></path>
            <path d="M4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
        </svg>
    );
}

export default SVGPeople;