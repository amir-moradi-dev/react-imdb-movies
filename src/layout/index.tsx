import React from "react"
import {LayoutProp} from "../types";
import Header from "./Header";

function Layout(props:LayoutProp) {
    return <>
        <Header />
        {props.children}
    </>
}

export default Layout