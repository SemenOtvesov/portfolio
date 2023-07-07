import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from '@components/Header'
import Footer from '@components/Footer'

import { useSelector } from "react-redux"

import { layoutInterface } from "@js/types/functionTypes"
import { Iuser, TuserUid, userStateInterfase } from "@js/types/stateTypes"

import { authFn } from "@js/mainFunctions/auth"
import { setHeightChildrenInBody } from "@setDOMfn/setHeightChildrenInBody"
import { setValueOfContainer } from "@setDOMfn/setValueOfContainer"
import { appLoaderImg } from "@setDOMfn/appLoaderImg"
import { equalSidesFn } from "@setDOMfn/equalSidesFn"
import { buttonSelected } from "@js/mainFunctions/setDOMfn/select"
import { useAppDispatch } from "@js/mainFunctions/hooks"
import { setActiveTrainingExercisesListRedux } from "@js/redux/userRouter"


export default (({scrollWidth, activeTraining}: layoutInterface)=>{
    const userUid: TuserUid = useSelector((state: userStateInterfase) => state.userRouter.userUid)
    const user: Iuser = useSelector((state: userStateInterfase) => state.userRouter.user)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        setHeightChildrenInBody()
        setValueOfContainer()
        appLoaderImg()
        equalSidesFn()

        const selects: NodeListOf<HTMLElement> = document.querySelectorAll('#select')
        return buttonSelected(selects)
    })
    useEffect(()=>{
        if(!activeTraining){return}
        const trainingId = user.trainingListKeys?.indexOf(activeTraining)
        let id = 0

        if(typeof trainingId !== 'number'){return}
        if(trainingId === undefined){return}
        user.trainingList?.forEach(training=>{
            if(id++ === +trainingId){
                dispatch(setActiveTrainingExercisesListRedux(training.exercisesList))
            }
        })
    }, [activeTraining])
    authFn(userUid)

    return <>
        <div id="bodyBackblur" className="body__backblur"></div>
        <Header user={user}/>
        <div id="popap" data-box-popap className="popap">
            <div className="popap__close-box"><div></div><span id="openPopap"  data-popap-type={'close'}></span></div>
            <form data-popap-side={'login'} data-popap-type={'login'} className="popap__main-login">
                <div className="popap__title">Вход</div>
                <div className="popap__input-box">
                    <input tabIndex={1} name="userMail" type="text" placeholder="Aдрес электронной почты"/>
                </div>
                <div className="popap__input-box">
                    <input tabIndex={2} name="userPass" type="password" placeholder="Пароль"/>
                </div>
                <div className="popap__button-box">
                    <button className="popap__button">Отправить</button>
                    <div id="registerButton" className="popap__button button">Зарегестрироваться</div>
                    <div id="errorText" className="popap__error-text"></div>
                </div>
            </form>

            <form data-popap-side={'reg'} data-popap-type={'login'} className="popap__succes-login">
                <div className="popap__title">Регистрация</div>
                <div className="popap__input-box">
                    <input disabled tabIndex={1} name="userName" type="text" placeholder="Ваше имя"/>
                    <div className="popap__input-check"></div>
                    <div id="errorTextPopap" className="popap__input-errorText"></div>
                </div>
                <div className="popap__input-box">
                    <input disabled tabIndex={2} name="userMail" type="text" placeholder="Aдрес электронной почты"/>
                    <div className="popap__input-check"></div>
                </div>
                <div className="popap__input-box">
                    <input disabled tabIndex={3} name="userPhone" type="tel" placeholder="Номер телефона"/>
                    <div className="popap__input-check"></div>
                    <div id="errorTextPopap" className="popap__input-errorText"></div>
                </div>
                <div className="popap__input-box">
                    <input disabled tabIndex={4} name="userPass" type="password" placeholder="Пароль"/>
                    <div className="popap__input-check"></div>
                    <div id="errorTextPopap" className="popap__input-errorText"></div>
                </div>
                <div className="popap__button-box">
                    <button disabled className="popap__button">Отправить</button>
                    <div id="errorText" className="popap__error-text"></div>
                </div>
            </form>
        </div>
        <main><div className="main__container"><Outlet context={{scrollWidth, user, activeTraining}} /></div></main>
        <Footer/>
    </>
}) as React.FC<{scrollWidth: number, activeTraining: undefined | string}>
