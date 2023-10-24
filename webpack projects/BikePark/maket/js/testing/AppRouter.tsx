import Layout from "@js/components/mainComponents/layout";
import MainRoute from "@js/components/routes/mainRoute";
import React from "react";
import { Route, Routes } from "react-router-dom";

export default ()=>{
    return <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<MainRoute/>}/>
            </Route>
        </Routes>
}