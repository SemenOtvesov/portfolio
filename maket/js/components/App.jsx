import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./mainComponents/layout"

import MainRoute from "./routes/mainRoute"
import RentRoute from "./routes/rentRoute"
import DeliveryRoute from "./routes/deliveryRoute"
import WhereToRide from "./routes/whereToRide"
import ContactRoute from "./routes/contactRoute"
import InfoRoute from "./routes/infoRoute"
import AccountRoute from "./routes/accountRoute"
import ExendLeaseRoute from "./routes/exendLeaseRoute"
import InvLinkRoute from "./routes/invLinkRoute"
import userAuth from "@js/state/userState/userAuth"
import RentComplete from "./routes/rentComplete"

export default ()=>{
    userAuth()
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<MainRoute/>}/>
                <Route path="rent" element={<RentRoute/>}/>
                <Route path="rentComplete" element={<RentComplete/>}/>
                <Route path="delivery" element={<DeliveryRoute/>}/>
                <Route path="whereToRide" element={<WhereToRide/>}/>
                <Route path="contact" element={<ContactRoute/>}/>
                <Route path="info" element={<InfoRoute/>}/>
                <Route path="account" element={<AccountRoute/>}/>
                <Route path="exendLease" element={<ExendLeaseRoute/>}/>
                <Route path="*" element={<InvLinkRoute/>}/>
            </Route>
        </Routes>
    )
}