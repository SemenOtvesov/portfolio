import React from "react"
import { NavLink } from "react-router-dom";

export default ({user})=>{
    let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
    );

    return <header id="header">
        {
        scrollWidth > 768
        ? 
        <div className="header__container">
            <div className="header__top">
                <div className="header__item-box">
                    <div id="burger" className="header__item burger"><span></span></div>
                    <div id="menu" className="header__menu">
                        <ul className="header__menu-list">
                            <li id="menuLink" className="header__menu-item"><NavLink to={'/catalog'}>Каталог</NavLink></li>
                            <li id="menuLink" className="header__menu-item"><NavLink to={'/company'}>О компании</NavLink></li>
                            <li id="menuLink" className="header__menu-item"><NavLink to={'/designers'}>Дизайнерам и архитекторам</NavLink></li>
                            <li id="menuLink" className="header__menu-item"><NavLink to={'/contacts'}>Контакты</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="header__item-box">
                    <div className="header__item text">
                        <div className="header__item-img">
                            <picture className='loading-img' data-image-type='icon' data-local="header"  data-icon-name="phone">
                                <div id='equalSidesRev' className='img-mask'/>
                                <source srcSet=''/>
                                <img src='' alt='' />
                            </picture>
                        </div>
                        <a href="tel:+79999999999" className="header__item-text-content">+7 (999) 999-99-99</a>
                    </div>
                    <div className="header__item text">
                        <div className="header__item-img">
                            <picture className='loading-img' data-image-type='icon' data-local="header"  data-icon-name="mail">
                                <div id='equalSidesRev' className='img-mask'/>
                                <source srcSet=''/>
                                <img src='' alt='' />
                            </picture>
                        </div>
                        <a href="mailto:sales@furnitureMarket.ru" className="header__item-text-content">sales@furnitureMarket.ru</a>
                    </div>
                </div>
                <div className="header__item-box">
                    <div id="openPopap" data-popap-type={'cooperation'} className="header__item text">
                        <div className="header__item-img">
                            <picture className='loading-img' data-image-type='icon' data-local="header"  data-icon-name="cooperation">
                                <div id='equalSidesRev' className='img-mask'/>
                                <source srcSet=''/>
                                <img src='' alt='' />
                            </picture>
                        </div>
                        <div className="header__item-text-content">Начать сотрудничество</div>
                    </div>
                </div>
                <div className="header__separator"></div>
            </div>
            <div className="header__bottom">
                <div className="header__item-box">
                    <div className="header__item logo">
                        <NavLink to={'/'}>
                            <picture data-image-type='logo' className="loading-img">
                                <div id="equalSidesRev" className="img-mask"></div>
                                <source srcSet=""/>
                                <img src="" alt="" />
                            </picture>
                        </NavLink>
                    </div>
                    <div className="header__item text">
                        <div className="header__item-logoText">ПРЕЗУМЦИЯ КАЧЕСТВА</div>
                    </div>
                </div>
                <div className="header__item-box">
                    <div className="header__item text underLineHover">
                        <div className="header__item-text-content"><NavLink to={'/catalog/tables'}>СТОЛЫ</NavLink></div>
                    </div>
                    <div className="header__item text underLineHover">
                        <div className="header__item-text-content"><NavLink to={'/catalog/cabinetFurniture'}>КОРПУСНАЯ МЕБЕЛЬ</NavLink></div>
                    </div>
                    <div className="header__item text underLineHover">
                        <div className="header__item-text-content"><NavLink to={'/catalog/shelving'}>СТЕЛЛАЖИ</NavLink></div>
                    </div>
                    <div className="header__item text underLineHover">
                        <div className="header__item-text-content"><NavLink to={'/catalog/receptionFurniture'}>МЕБЕЛЬ ДЛЯ ПРИЁМНЫХ</NavLink></div>
                    </div>
                    <div className="header__item text underLineHover">
                        <div className="header__item-text-content"><NavLink to={'/catalog/chairs'}>КРЕСЛА</NavLink></div>
                    </div>
                </div>
                <div className="header__item-box iconBox">

                    <div className="header__item text">
                        <NavLink to={'/favourites'} id="equalSidesRev" className="header__item-img bottom">
                            <div id="equalSides" className="header__item-counter">
                                {calcCounterValue({type: "favourites", user})}
                            </div>
                            <picture className='loading-img' data-image-type='iconHovered' data-local="header"  data-icon-name="favourites">
                                <div id='equalSidesRev' className='img-mask'/>
                                <img src='' alt='' />
                            </picture>
                        </NavLink>
                    </div>

                    <div className="header__item text">
                        <NavLink to={'/basket'} id="equalSidesRev" className="header__item-img bottom">
                            <div id="equalSides" className="header__item-counter">
                                {calcCounterValue({type: "basket", user})}
                            </div>
                            <picture className='loading-img' data-image-type='iconHovered' data-local="header"  data-icon-name="basket">
                                <div id='equalSidesRev' className='img-mask'/>
                                <img src='' alt='' />
                            </picture>
                        </NavLink>
                    </div>
                    
                    <div className="header__item text">
                        <div id="equalSidesRev" className="header__item-img bottom">
                            <picture id="logOut" className='loading-img' data-image-type='iconHovered' data-local="header"  data-icon-name="logOut">
                                <div id='equalSidesRev' className='img-mask'/>
                                <img src='' alt='' />
                            </picture>
                        </div>
                    </div>

                </div>
                <div className="header__separator"></div>
            </div>
        </div>
        :
        <div className="header__container">
            <div className="header__bottom">
                <div className="header__item-box">
                    <div className="header__item logo">
                        <NavLink to={'/'}>
                            <picture className='loading-img' data-image-type='logo'>
                                <div id='equalSidesRev' className='img-mask'/>
                                <source srcSet=''/>
                                <img src='' alt='' />
                            </picture>
                        </NavLink>
                    </div>
                    <div className="header__item text">
                        <div className="header__item-logoText">ПРЕЗУМЦИЯ КАЧЕСТВА</div>
                    </div>
                </div>
                <div className="header__item-box iconBox">

                    <div className="header__item text">
                        <NavLink to={'/favourites'} id="equalSidesRev" className="header__item-img bottom">
                            <div id="equalSides" className="header__item-counter">
                                {calcCounterValue({type: "favourites", user})}
                            </div>
                            <picture className='loading-img' data-image-type='iconHovered' data-local="header"  data-icon-name="favourites">
                                <div id='equalSidesRev' className='img-mask'/>
                                <img src='' alt='' />
                            </picture>
                        </NavLink>
                    </div>

                    <div className="header__item text">
                        <NavLink to={'/basket'} id="equalSidesRev" className="header__item-img bottom">
                            <div id="equalSides" className="header__item-counter">
                                {calcCounterValue({type: "basket", user})}
                            </div>
                            <picture className='loading-img' data-image-type='iconHovered' data-local="header"  data-icon-name="basket">
                                <div id='equalSidesRev' className='img-mask'/>
                                <img src='' alt='' />
                            </picture>
                        </NavLink>
                    </div>

                    <div className="header__item text">
                        <div id="equalSidesRev" className="header__item-img bottom">
                            <picture id="logOut" className='loading-img' data-image-type='iconHovered' data-local="header"  data-icon-name="logOut">
                                <div id='equalSidesRev' className='img-mask'/>
                                <img src='' alt='' />
                            </picture>
                        </div>
                    </div>

                    <div className="header__item-box">
                        <div id="burger" className="header__item burger"><span></span></div>
                        <div id="menu" className="header__menu">
                            <ul className="header__menu-list">
                                <li id="menuLink" className="header__menu-item"><NavLink to={'/catalog'}>Каталог</NavLink></li>
                                <li id="menuLink" className="header__menu-item"><NavLink to={'/company'}>О компании</NavLink></li>
                                <li id="menuLink" className="header__menu-item"><NavLink to={'/designers'}>Дизайнерам и архитекторам</NavLink></li>
                                <li id="menuLink" className="header__menu-item"><NavLink to={'/contacts'}>Контакты</NavLink></li>
                            </ul>

                            <div id="menuLink" className="header__menu-cards">
                                <a href="tel:+79999999999" className="header__menu-card">
                                    <div className="header__menu-card-img">
                                        <picture className='loading-img' data-image-type='icon' data-local="header"  data-icon-name="phone">
                                            <div id='equalSidesRev' className='img-mask'/>
                                            <source srcSet=''/>
                                            <img src='' alt='' />
                                        </picture>
                                    </div>
                                    <div className="header__menu-card-text">
                                        {scrollWidth > 425 ? '+7 (999) 999-99-99' : <>7<br/>(999)<br/>999-99-99</>}
                                    </div>
                                </a>
                            </div>
                            <div id="menuLink" className="header__menu-cards">
                                <a href="mailto:sales@furnitureMarket.ru" className="header__menu-card">
                                    <div className="header__menu-card-img">
                                        <picture className='loading-img' data-image-type='icon' data-local="header"  data-icon-name="mail">
                                            <div id='equalSidesRev' className='img-mask'/>
                                            <source srcSet=''/>
                                            <img src='' alt='' />
                                        </picture>
                                    </div>
                                    <div className="header__menu-card-text">
                                        {scrollWidth > 425 ? 'sales@furnitureMarket.ru' : <>sales<br/>@<br/>furnitureMarket.ru</>}
                                    </div>
                                </a>
                                <div id="openPopap" data-popap-type={'cooperation'} className="header__menu-card">
                                    <div className="header__menu-card-img">
                                        <picture className='loading-img' data-image-type='icon' data-local="header"  data-icon-name="cooperation">
                                            <div id='equalSidesRev' className='img-mask'/>
                                            <source srcSet=''/>
                                            <img src='' alt='' />
                                        </picture>
                                    </div>
                                    <div className="header__menu-card-text">{scrollWidth > 425 ? 'Начать сотрудничество' : 'Сотрудничать'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__separator"></div>
            </div>
        </div>
        }
            </header>
}

function calcCounterValue({type, user}){
    const favouritesList = user.favouritesList || []
    const basketList = user.basketList || []

    if(type === 'favourites'){
        const value = favouritesList.length
        return value > 100 ? '99+' : favouritesList.length
    }
    if(type === 'basket'){
        const value = basketList.length
        return value > 100 ? '99+' : basketList.length
    }
}