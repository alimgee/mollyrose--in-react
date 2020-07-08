import React from "react";
import { Articles } from "./data";

export  const FirstArticle = () => {

    return (

        <>
            <div className="card-text" ><h6 style={{fontFamily:"Roboto Mono"}}>{Articles[0].name} </h6></div>
            <div className="card-text mb-4"><span >{Articles[0].content}</span></div>
        </>
    );
};