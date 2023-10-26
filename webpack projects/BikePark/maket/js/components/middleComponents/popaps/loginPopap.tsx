import React from "react";
import accountButtonClick from '@events/click/accountButtonClick/accountButtonClick'
import loginTypePopapClick from '@events/click/loginTypePopapClick/loginTypePopapClick'
import loginPopapSubmit from '@events/submit/loginPopapSubmit/loginPopapSubmit'
import loginPopapInput from '@events/input/loginPopapInput/loginPopapInput'
import Image from "@componentModules/image/image";

export default ()=>{ 
    return <div id="loginPopap" className="loginpopap">
            <div id="accountButton"  onClick={accountButtonClick} className="loginpopap__close"><span></span></div>

            <div className="loginpopap__param-box">
                <div id="loginTypePopap" onClick={loginTypePopapClick} data-login-type="login" className="loginpopap__param active">Вход</div>
                <div id="loginTypePopap" onClick={loginTypePopapClick} data-login-type="reg"  className="loginpopap__param">Регистрация</div>
            </div>

            <form 
                onSubmit={loginPopapSubmit}
                onInput={loginPopapInput}
                data-login-popap id="loginPopap-front" 
                className="loginpopap__front active">
                    {loginContent()}
                </form>
            <form 
                onSubmit={loginPopapSubmit} 
                onInput={loginPopapInput}
                data-login-popap id="loginPopap-back" 
                className="loginpopap__back">
                    {regContent()}
                </form>
        </div>
}

function loginContent(){
    return (
            <>
                <div className="loginpopap__input-box">
                    <div className="loginpopap__input-title">E-mail*</div>
                    <div className="inputArea loginpopap__input-area login">
                        <input type="text" name='userMail' className="loginpopap__input" placeholder="Введите E-mail"/>
                        <div id="errorTextPopap" className="loginpopap__errorText"></div>
                    </div>
                </div>
                
                <div className="loginpopap__input-box">
                    <div className="loginpopap__input-title">Пароль*</div>
                    <div className="inputArea loginpopap__input-area login">
                        <input type="text"  name='userPass' className="loginpopap__input" placeholder="Введите пароль"/>
                        <div id="errorTextPopap" className="loginpopap__errorText"></div>
                        <Image imageType="icon" imageName="visablePass" sourseMod={true} modClass="loginpopap__input-image"/>
                    </div>
                </div>
    
                <div className="loginpopap__button-box"> 
                    <button 
                        id="loginButton" 
                        data-button-type='reg' 
                        type='submit' 
                        className="loginpopap__button blue disabled"
                        disabled
                    >
                        Войти
                    </button>
                    <div className="loginpopap__button"><span>Забыли пароль?</span></div>
                    <div id="popapError" className="loginpopap__errorPopap">sadasd</div>
                </div>
            </>
    )
}
function regContent(){
    return (
        <>
            <div className="loginpopap__input-box">
                <div className="loginpopap__input-title">Имя*</div>
                <div className="inputArea loginpopap__input-area">
                    <input type="text" name='userName' className="loginpopap__input" placeholder="Введите имя"/>
                    <div id="errorTextPopap" className="loginpopap__errorText"></div>
                </div>
            </div>
            
            <div className="loginpopap__input-box">
                <div className="loginpopap__input-title">Номер телефона*</div>
                <div className="inputArea loginpopap__input-area">
                    <input type="text" name='userPhone' className="loginpopap__input" placeholder="Введите номер телефона"/>
                    <div id="errorTextPopap" className="loginpopap__errorText"></div>
                </div>
            </div>

            <div className="loginpopap__input-box">
                <div className="loginpopap__input-title">E-mail</div>
                <div className="inputArea loginpopap__input-area">
                    <input type="text" name='userMail' className="loginpopap__input" placeholder="Введите E-mail"/>
                    <div id="errorTextPopap" className="loginpopap__errorText"></div>
                </div>
            </div>

            <div className="loginpopap__input-box">
                <div className="loginpopap__input-title">Пароль*</div>
                <div className="inputArea loginpopap__input-area">
                    <input type="text" name='userPass' className="loginpopap__input" placeholder="Введите пароль"/>
                    <div id="errorTextPopap" className="loginpopap__errorText"></div>
                    <Image imageType="icon" imageName="visablePass" sourseMod={true} modClass="loginpopap__input-image"/>
                </div>
            </div>

            <div className="contact__form-checkbox-box">
                <div id="regInfoButton" data-checkbox className="contact__form-checkbox"><span></span></div>
                <div className="contact__form-checkbox-text">Согласие на обработку персональных данных</div>
            </div>

            <div className="loginpopap__button-box"> 
                <button 
                    id="loginButton" 
                    data-button-type='reg' 
                    type='submit' 
                    className="loginpopap__button blue disabled"
                    disabled
                >
                        Зарегестрироваться
                </button>
                <div className="loginpopap__button gray">
                    Уже авторизованы? 
                    <span id="loginTypePopap" onClick={loginTypePopapClick} data-login-type="login">Войти</span>
                </div>
                <div id="popapError" className="loginpopap__errorPopap"></div>
            </div>
        </>
    )
}