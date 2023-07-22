import React from "react";
import ReactDOM from "react-dom/client";

/* 
    Here we have imported React and created DOM so can use react easily.
    Basically this is react initialization
*/
export const root = ReactDOM.createRoot(document.getElementById("root"));
// Created theme initializer
export const QLtheme = (params) => {
    return root.render(params);
};