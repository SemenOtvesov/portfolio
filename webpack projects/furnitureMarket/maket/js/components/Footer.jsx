import React from "react";
import { NavLink } from "react-router-dom";

export default ()=>{
    return <footer className="footer">
                <div className="footer__container">
                    <div className="footer__logo-box">
                        <div className="footer__logo">
                            <picture data-image-type='logo' className="loading-img">
                                <div id="equalSidesRev" className="img-mask"></div>
                                <source srcSet=""/>
                                <img src="" alt="" />
                            </picture>
                        </div>
                    </div>
                    <div className="footer__item-box">
    
                            <div className="footer__item-box-column">
                                <div className="footer__item">
                                    <div className="footer__item-text"><NavLink to={'/catalog'}>Каталог</NavLink></div>
                                </div>
                                <div className="footer__item">
                                    <div className="footer__item-text"><NavLink to={'/company'}>Дизайнерам и архитекторам</NavLink></div>
                                </div>
                                <div className="footer__item">
                                    <div className="footer__item-text"><NavLink to={'/designers'}>О компании</NavLink></div>
                                </div>
                                <div className="footer__item">
                                    <div className="footer__item-text"><NavLink to={'/contacts'}>Контакты</NavLink></div>
                                </div>
                            </div>
                                <div className="footer__item-spliter"></div>
                            <div className="footer__item-box-column">
                                <div className="footer__item">
                                    <div className="footer__item-text">г. Москва, ул. проспект Мира, 102с143</div>
                                </div>
                                <div className="footer__item">
                                    <div className="footer__item-text">Пн.— Пт.: c 10:00 до 19:00,</div>
                                    <div className="footer__item-text">Сб.— Вс.: выходныe</div>
                                </div>
                                <div className="footer__item">
                                    <div className="footer__item-text"><a href="tel:+79999999999">+7 (999) 999-99-99</a></div>
                                    <div className="footer__item-text"><a href="mailto:sales@furnitureMarket.ru">sales@furnitureMarket.ru</a></div>
                                </div>
                            </div>
                                <div className="footer__item-spliter"></div>
                            <div className="footer__item-box-column">
                                <div className="footer__item item__image">
                                    <div className="footer__item-img">
                                        <picture className='loading-img' data-image-type='icon' data-local="footer"  data-icon-name="watsapp">
                                            <div id='equalSidesRev' className='img-mask'/>
                                            <source srcSet=''/>
                                            <img src='' alt='' />
                                        </picture>
                                    </div>
                                    <div className="footer__item-text">Напишите нам в WhatsApp</div>
                                </div>

                                <div className="footer__item item__image">
                                    <div className="footer__item-img">
                                        <picture className='loading-img' data-image-type='icon' data-local="footer"  data-icon-name="telegram">
                                            <div id='equalSidesRev' className='img-mask'/>
                                            <source srcSet=''/>
                                            <img src='' alt='' />
                                        </picture>
                                    </div>
                                    <div className="footer__item-text">Напишите нам в Telegram</div>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </footer>
}