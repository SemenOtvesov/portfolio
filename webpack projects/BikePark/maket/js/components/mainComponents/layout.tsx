import React, { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer/footer";

import { windowListenerResize } from "@events/window/resize/windowListenerResize";

import { setScrollWidthLocal } from "@mainFunctions/localState/scrollWidth";
import { setUserUidLocal } from "@mainFunctions/localState/userUidLocal";

import loginPopap from "@middleComponents/popaps/loginPopap";
import orderDeletepPopap from "@middleComponents/popaps/orderDeletepPopap";
import { useSelector } from "react-redux";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import outsideTheCalendarClick from '@events/window/outsideTheCalendarClick/outsideTheCalendarClick'
import checkBoxClick from '@events/window/checkBoxClick/checkBoxClick'
import { getRentInfo } from "@js/state/rentState/async/getRentInfo";
import { useAppDispatch } from "@js/hooks/useAppDispatch";
import outsideSelectClick from "@js/mainFunctions/events/window/outsideSelectClick/outsideSelectClick";

export default ()=>{
    const dispath = useAppDispatch()
    const [scrollWidth, setScrollWidth] = useState(Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
        ))
    const userUid = useSelector((state: userStateInterfase)=>state.userRouter.userUid) || ''

    useEffect(()=>{
        setUserUidLocal(userUid)
    }, [userUid])

    useEffect(()=>{
        dispath(getRentInfo())
        setScrollWidthLocal(Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
            ));
        
        const resizeFn = windowListenerResize.bind(this, setScrollWidth)
        window.addEventListener('resize', resizeFn)
        return ()=>{window.removeEventListener('resize', resizeFn)}
    }, [])

    return <>
        <Header scrollWidth={scrollWidth} userUid={userUid}/>
            <main onClick={(e)=>{outsideTheCalendarClick(e); checkBoxClick(e); outsideSelectClick(e)}}>
                <div id="bodyBackblur" className="body__backblur"></div>
                {loginPopap()}
                {orderDeletepPopap()}
                <Suspense fallback={
                    <div className="loading-img" style={{height: '10vh'}}>
                        <div className="img-mask"/>
                    </div>
                }>
                    <Outlet context={{scrollWidth, userUid}}/>
                </Suspense>
            </main>
        <Footer scrollWidth={scrollWidth}/>
    </>
}