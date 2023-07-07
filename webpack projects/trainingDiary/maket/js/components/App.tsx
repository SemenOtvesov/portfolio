import React, { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import Layout from "./Layout"
import MainRoute from "./Routes/mainRoute";

import { windowListenerInput } from "@events/window/windowListenerInput";
import { windowListenerResize } from "@events/window/windowListenerResize";
import { windowListenerClick } from "@events/window/windowListenerClick";
import { windowListenerSubmit } from "@events/window/windowListenerSubmit";

import { useAppDispatch } from "@mainFunctions/hooks";
import { windowListenerChange } from "@js/mainFunctions/events/window/windowListenerChange";
import { setActiveTrainingRedux } from "@js/redux/userRouter";

export default ()=>{
    const dispatch = useAppDispatch()
    const location = useLocation()

    let scrollWidthValue = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
    );
    const [scrollWidth, setScrollWidth] = useState(scrollWidthValue)
    const [activeTraining, setActiveTraining] = useState <undefined | string> (undefined)


    useEffect(()=>{
        dispatch(setActiveTrainingRedux(activeTraining))
    }, [activeTraining])

    useEffect(()=>{
        const resizeFn = windowListenerResize.bind(this, setScrollWidth)
        window.addEventListener('resize', resizeFn)

        const clickFn = windowListenerClick.bind(this, dispatch, setActiveTraining)
        window.addEventListener('click', clickFn)

        const inputFn = windowListenerInput
        window.addEventListener('input', inputFn)

        const submitFn = windowListenerSubmit
        window.addEventListener('submit', submitFn)

        const changeFn = windowListenerChange
        window.addEventListener('change', changeFn)

        return ()=>{
            document.removeEventListener('resize', resizeFn)
            document.removeEventListener('click', clickFn)
            document.removeEventListener('input', inputFn)
            document.removeEventListener('submit', submitFn)
            document.removeEventListener('change', changeFn)
        }
    }, [])

    return(
        <>
            <Routes>
                <Route path="/" element={<Layout scrollWidth={scrollWidth} activeTraining={activeTraining}/>}>
                    <Route index element={<MainRoute/>}/>
                </Route>
            </Routes>
        </>
    )
}