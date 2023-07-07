import React from "react";

const notAuth: React.FC = () => {
    return   <div className="undefinedUser__box"> 
                <div className="undefinedUser__title">Вы не авторизированны,<br/> пожалуйста войдите в аккаунт</div>
                <button id="openPopap" className="undefinedUser__button">Войти</button>
            </div>
}

export default notAuth