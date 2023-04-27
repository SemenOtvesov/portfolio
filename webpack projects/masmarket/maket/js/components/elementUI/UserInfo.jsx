import React from "react";
import { NavLink } from "react-router-dom";

export default (props)=>{
    return(
        'userInfo'
    )
}
<>
        <div className="mainUserProfile__info-item">
                <div id="equalSides" className="mainUserProfile__info-logo">
                    <picture id="prod" data-prod-name={idProd} className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                    </picture>
                </div>
                <div className="mainUserProfile__info-name">{`${props.user.name} ${props.user.subname}`}</div>
                <button className="mainUserProfile__info-button">Изменить профиль</button>
            </div>

            <div className="mainUserProfile__info-item">
                <div className="mainUserProfile__info-title">Личная информация</div>
                <ul className="mainUserProfile__info-list">
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/userProfile'}>Главная</NavLink></li>
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Баллы и бонусы</NavLink></li>
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Сохраненные карты</NavLink></li>
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Store Premium</NavLink></li>
                </ul>
            </div>
            <div className="mainUserProfile__info-item">
                <div className="mainUserProfile__info-title">Заказы</div>
                <ul className="mainUserProfile__info-list">
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Моя корзина</NavLink></li>
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Мои заказы</NavLink></li>
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Мои возвраты</NavLink></li>
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Купленные товары</NavLink></li>
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Электронные чеки</NavLink></li>
                </ul>
            </div>
            <div className="mainUserProfile__info-item">
                <div className="mainUserProfile__info-title">Отзывы и вопросы о товарах</div>
                <ul className="mainUserProfile__info-list">
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Мои отзывы</NavLink></li>
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Мои вопросы и ответы</NavLink></li>
                </ul>
            </div>
            <div className="mainUserProfile__info-item">
                <div className="mainUserProfile__info-title">Подписки</div>
                <ul className="mainUserProfile__info-list">
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Избранное</NavLink></li>
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Настройки уведомлений</NavLink></li>
                </ul>
</div></>