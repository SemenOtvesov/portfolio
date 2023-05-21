import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from '@components/Header.jsx'
import Footer from '@components/Footer.jsx'
import { useState } from "react"
import {auth} from '@firebaseFolder/firebaseInit.js'
import { onAuthStateChanged } from "firebase/auth";

import { getUser, setUser } from "@redux/userRouter.js"
import { useDispatch, useSelector } from "react-redux"

export default ({userInfo})=>{
    const [userUid, setUserUid] = useState()
    const user = useSelector(state=> state.userSlise.user)
    const includes = useSelector(state=> state.userSlise.includes)

    const dispath = useDispatch()

    onAuthStateChanged(auth, (userData)=>{
        if(userData){
            if(userUid != userData.uid){setUserUid(userData.uid)}
        }else(
            setUserUid(undefined)
        )
    })
    useEffect(()=>{
        if(userUid){dispath(getUser(userUid))}
    }, [userUid])

    useEffect(()=>{
        if(includes === false){
            dispath(setUser({userUid, userData: userInfo}))
        }
    }, [includes])

    return <>
        <div id="bodyBackblur" className="body__backblur"></div>
        <Header user={user}/>
        <form id="popap" data-box-popap data-popap-type={'cooperation'} className="popap">
            <div className="popap__close-box"><div></div><span id="openPopap" data-popap-type={'close'}></span></div>
            <div className="popap__main">
                <div className="popap__title">НАЧАТЬ СОТРУДНИЧЕСТВО</div>
                <div className="popap__text">Хотите сотрудничать? Свяжитесь с нами, и мы предоставим необходимую информацию.</div>
    
                <div className="popap__input-box">
                    <input tabIndex={1} type="text" placeholder="Ваше имя"/>
                </div>
                <div className="popap__input-box">
                    <input tabIndex={2} type="text" placeholder="Телефон"/>
                </div>
                <div className="popap__input-box">
                    <input tabIndex={3} type="text" placeholder="E-mail"/>
                </div>
                <div className="popap__textarea">
                    <textarea tabIndex={4} placeholder="Ваше сообщение"></textarea>
                </div>
                <div className="popap__button-box">
                    <button tabIndex={5} className="popap__button">Отправить</button>
                    <div id="errorText" className="popap__error-text">Пожалуйста заполните все поля</div>
                </div>
            </div>
            <div className="popap__succes">
                <div className="popap__succes-title">Спасибо за обращение, ожидайте ответа</div>
                <div className="popap__succes-icon">
                    <picture className='loading-img' data-image-type='icon' data-local="mainIcon"  data-icon-name="success">
                        <div id='equalSidesRev' className='img-mask'/>
                        <source srcSet=''/>
                        <img src='' alt='' />
                    </picture>
                </div>
            </div>
        </form>
        <div id="popap" data-box-popap data-popap-type={'login-box'} className="popap">
            <div className="popap__close-box"><div></div><span id="openPopap"  data-popap-type={'close'}></span></div>
            <form id="popap" data-popap-side={'login'} data-popap-type={'login'} className="popap__main-login">
                <div className="popap__title">Вход</div>
                <div className="popap__input-box">
                    <input tabIndex={1} name="userMail" type="text" placeholder="Aдрес электронной почты"/>
                </div>
                <div className="popap__input-box">
                    <input tabIndex={2} name="userPass" type="password" placeholder="Пароль"/>
                </div>
                <div className="popap__button-box">
                    <button className="popap__button">Отправить</button>
                    <div id="registerButton" className="popap__button">Зарегестрироваться</div>
                    <div id="errorText" className="popap__error-text"></div>
                </div>
            </form>

            <form id="popap" data-popap-side={'reg'} data-popap-type={'login'} className="popap__succes-login">
                <div className="popap__title">Регистрация</div>
                <div className="popap__input-box">
                    <input tabIndex={1} name="userName" type="text" placeholder="Ваше имя"/>
                    <div className="popap__input-check"></div>
                    <div id="errorTextPopap" className="popap__input-errorText"></div>
                </div>
                <div className="popap__input-box">
                    <input tabIndex={2} name="userMail" type="text" placeholder="Aдрес электронной почты"/>
                    <div className="popap__input-check"></div>
                </div>
                <div className="popap__input-box">
                    <input tabIndex={3} name="userPhone" type="tel" placeholder="Номер телефона"/>
                    <div className="popap__input-check"></div>
                    <div id="errorTextPopap" className="popap__input-errorText"></div>
                </div>
                <div className="popap__input-box">
                    <input tabIndex={4} name="userPass" type="password" placeholder="Пароль"/>
                    <div className="popap__input-check"></div>
                    <div id="errorTextPopap" className="popap__input-errorText"></div>
                </div>
                <div className="popap__button-box">
                    <button className="popap__button">Отправить</button>
                    <div id="errorText" className="popap__error-text"></div>
                </div>
            </form>
        </div>
        <div id="popap" data-box-popap data-popap-type={'placeOrder'} className="popap valid">
            <div className="popap__close-box"><div></div><span id="openPopap" data-popap-type={'close'}></span></div>
            <div className="popap__main">
                <div className="popap__title">НАЧАТЬ СОТРУДНИЧЕСТВО</div>
                <div className="popap__text">Хотите сотрудничать? Свяжитесь с нами, и мы предоставим необходимую информацию.</div>
    
                <div className="popap__input-box">
                    <input tabIndex={1} type="text" placeholder="Ваше имя"/>
                </div>
                <div className="popap__input-box">
                    <input tabIndex={2} type="text" placeholder="Телефон"/>
                </div>
                <div className="popap__input-box">
                    <input tabIndex={3} type="text" placeholder="E-mail"/>
                </div>
                <div className="popap__textarea">
                    <textarea tabIndex={4} placeholder="Ваше сообщение"></textarea>
                </div>
                <div className="popap__button-box">
                    <button tabIndex={5} className="popap__button">Отправить</button>
                    <div id="errorText" className="popap__error-text">Пожалуйста заполните все поля</div>
                </div>
            </div>
            <div className="popap__succes">
                <div className="popap__succes-title">Спасибо за заказ, ожидайте ответа (товары из корзины удалены не будут)</div>
                <div className="popap__succes-icon">
                    <picture className='loading-img' data-image-type='icon' data-local="mainIcon"  data-icon-name="success">
                        <div id='equalSidesRev' className='img-mask'/>
                        <source srcSet=''/>
                        <img src='' alt='' />
                    </picture>
                </div>
            </div>
        </div>
        <main><div className="main__container"><Outlet context={{userUid, user}} /></div></main>
        <Footer/>
    </>
}

