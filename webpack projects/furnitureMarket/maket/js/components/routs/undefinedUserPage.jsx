import React from "react";

export default ()=>{
    return   <div className="undefinedUser__box"> 
                <div className="undefinedUser__title">Вы не авторизированны,<br/> пожалуйста войдите в аккаунт</div>
                <button id="openPopap" data-popap-type={'login-box'} className="undefinedUser__button">Войти</button>
            </div>
}