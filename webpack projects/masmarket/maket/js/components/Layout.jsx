import React from "react";
import { Outlet } from "react-router-dom";
import Header from './Header.jsx'
import Footer from "./Footer.jsx";

export default ({firebaseConfig, quantityEl})=>{
    return(
        <>
            <Header firebaseConfig={firebaseConfig} quantityEl={quantityEl}/>
            <div className="body-blackBlur"></div>
            <Outlet/>
            <Footer />
        </>
    )
}
