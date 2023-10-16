import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

import { windowListenerResize } from "@events/window/resize/windowListenerResize";

import { setScrollWidthLocal } from "@mainFunctions/localState/scrollWidth";
import { setUserUidLocal } from "@mainFunctions/localState/userUidLocal";

import { equalSidesFn } from "@mainFunctions/setDOM/equalSidesFn/equalSidesFn";

import loginPopap from "@middleComponents/popaps/loginPopap";
import orderDeletepPopap from "@middleComponents/popaps/orderDeletepPopap";
import { useSelector } from "react-redux";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import outsideTheCalendarClick from '@events/window/outsideTheCalendarClick/outsideTheCalendarClick'
import checkBoxClick from '@events/window/checkBoxClick/checkBoxClick'
import { getRentInfo } from "@js/state/rentState/async/getRentInfo";
import { useAppDispatch } from "@js/hooks/useAppDispatch";

export default ()=>{
    const dispath = useAppDispatch()
    const [scrollWidth, setScrollWidth] = useState(Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
        ))
    const userUid = useSelector((state: userStateInterfase)=>state.userRouter.userUid) || ''

    useEffect(()=>{
        equalSidesFn()
    })

    useEffect(()=>{
        setUserUidLocal(userUid)
    }, [userUid])

    useEffect(()=>{
        dispath(getRentInfo())
        setScrollWidthLocal(scrollWidth);
        
        const resizeFn = windowListenerResize.bind(this, setScrollWidth)
        window.addEventListener('resize', resizeFn)
        return ()=>{window.removeEventListener('resize', resizeFn)}
    }, [])

    return <>
        <Header scrollWidth={scrollWidth} userUid={userUid}/>
            <main onClick={(e)=>{outsideTheCalendarClick(e); checkBoxClick(e)}}>
                <div id="bodyBackblur" className="body__backblur"></div>
                {loginPopap()}
                {orderDeletepPopap()}
                <Outlet context={{scrollWidth, userUid}}/>
            </main>
        <Footer scrollWidth={scrollWidth}/>
    </>
}