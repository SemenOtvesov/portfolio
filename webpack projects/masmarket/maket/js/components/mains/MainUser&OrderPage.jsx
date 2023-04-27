import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AllUser from '@midleComponents/AllUser.jsx'

export default (props)=>{
    let scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );

    if(props.user){
        return(
            <div className="mainUserProfile">
                <div className="mainUserProfile__container">
                    {contentSlidebar(scrollWidth, props, 
                    <>
                        <div className="mainUserProfile__right">
                            <props.rigthContent user={props.user} quantityEl={props.quantityEl}/>
                        </div>
                    </>)}
                </div>
            </div>
        )
    }else{
        return <AllUser/>
    }
}

function contentSlidebar(scrollWidth, props, rigthContent){
    if(scrollWidth > 768){
        return <>
            <div className="mainUserProfile__left">
                <div className="mainUserProfile__info-item">
                    <div id="equalSides" className="mainUserProfile__info-logo">
                        <picture id="userLogo" className="loading-img">
                            <div id="equalSidesRev" className="img-mask" style={{pointerEvents:'none'}}></div>
                            <source srcSet=''/>
                            <img src='' alt="" />
                            <div className="mainUserProfile__info-logo-download-box">
                                <input id="logoDownload" type={'file'} className="mainUserProfile__info-logo-download"></input>
                                <label htmlFor="logoDownload" className="mainUserProfile__info-logo-download-visual">
                                    <picture id="icon" data-icon-name="arrowDownloadLogo" className="loading-img">
                                        <div id="equalSidesRev" className="img-mask"></div>
                                        <source srcSet=''/>
                                        <img src='' alt="" />
                                    </picture>
                                </label>
                                <div className="mainUserProfile__info-logo-download-text">выбрать фото</div>
                            </div>
                        </picture>
                    </div>
                    <div className="mainUserProfile__info-name">{`${props.user.userName} ${props.user.userSubname}`}</div>
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
                        <li className="mainUserProfile__info-list-item"><NavLink to={'/order'}>Мои заказы</NavLink></li>
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
                </div>
                <div className="mainUserProfile__info-item">
                    <div className="mainUserProfile__info-title">Об аккаунте</div>
                    <ul className="mainUserProfile__info-list">
                        <li id="exitAccont" className="mainUserProfile__info-list-item red"><a>Выйти из аккаунта</a></li>
                    </ul>
                </div>
            </div>
            {rigthContent}
            </>
    }else{
        return <>
        <div className="mainUserProfile__left">
            <div className="mainUserProfile__info-item phone">
                <div id="equalSides" className="mainUserProfile__info-logo">
                    <picture id="userLogo" className="loading-img">
                        <div id="equalSidesRev" className="img-mask" style={{pointerEvents:'none'}}></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                        <div className="mainUserProfile__info-logo-download-box">
                            <input id="logoDownload" type={'file'} className="mainUserProfile__info-logo-download"></input>
                            <label htmlFor="logoDownload" className="mainUserProfile__info-logo-download-visual">
                                <picture id="icon" data-icon-name="arrowDownloadLogo" className="loading-img">
                                    <div id="equalSidesRev" className="img-mask"></div>
                                    <source srcSet=''/>
                                    <img src='' alt="" />
                                </picture>
                            </label>
                            <div className="mainUserProfile__info-logo-download-text">выбрать фото</div>
                        </div>
                    </picture>
                </div>
                <div className="mainUserProfile__info-userPhone">
                    <div className="mainUserProfile__info-name">{`${props.user.userName} ${props.user.userSubname}`}</div>
                </div>
            </div>

            {rigthContent}

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
                    <li className="mainUserProfile__info-list-item"><NavLink to={'/order'}>Мои заказы</NavLink></li>
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
            </div>
            <div className="mainUserProfile__info-item">
                <div className="mainUserProfile__info-title">Об аккаунте</div>
                <ul className="mainUserProfile__info-list">
                    <li id="exitAccont" className="mainUserProfile__info-list-item red"><a>Выйти из аккаунта</a></li>
                </ul>
            </div>
        </div>
        </>
    }
}