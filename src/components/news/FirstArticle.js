import React from "react";
import { Articles } from "./data";

export  const FirstArticle = () => {

    return (

        <>
            <div className="card-text" ><h4 style={{fontFamily:"Roboto Mono"}}>{Articles[0].name} </h4></div>
            <div className="card-text mb-3"><span >{Articles[0].content}</span></div>
        </>
    );
};