import React from "react";
import ReactDOM from "react-dom/client";

export const root = ReactDOM.createRoot(document.getElementById("root"));
// Created theme initializer
export const QLtheme = (params) => {
    return root.render(params);
};