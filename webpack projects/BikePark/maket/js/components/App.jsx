import React, {lazy} from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./mainComponents/layout"
import userAuth from "@js/state/userState/userAuth"

const MainRoute = lazy(()=> import("./routes/mainRoute"))
const RentRoute = lazy(()=> import( "./routes/rentRoute"))
const DeliveryRoute = lazy(()=> import( "./routes/deliveryRoute"))
const WhereToRide = lazy(()=> import( "./routes/whereToRide"))
const ContactRoute = lazy(()=> import( "./routes/contactRoute"))
const InfoRoute = lazy(()=> import( "./routes/infoRoute"))
const AccountRoute = lazy(()=> import( "./routes/accountRoute"))
const ExendLeaseRoute = lazy(()=> import( "./routes/exendLeaseRoute"))
const InvLinkRoute = lazy(()=> import( "./routes/invLinkRoute"))
const RentComplete = lazy(()=> import( "./routes/rentComplete"))

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