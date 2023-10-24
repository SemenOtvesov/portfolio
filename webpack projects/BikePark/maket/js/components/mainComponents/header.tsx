import { burgerClick } from "@events/click/burgerClick/burgerClick";
import accountButtonClick from "@events/click/accountButtonClick/accountButtonClick";
import { ToutletContext } from "@js/types/outletContext";
import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "@js/firebaseFolder/firebaseInit";
import { signOut } from "firebase/auth";
import Image from "@componentModules/image/image";

export default({scrollWidth, userUid}: ToutletContext)=>{

    return <header className="header">
                <div id="headerContainer" data-testid={'headerContainer'} className="header__container">

                    <NavLink to={'/'}>
                        <Image imageType="icon" imageName="logo" sourseMod={true}/>
                    </NavLink>
    
                    <nav data-testid={'navigation'} className="header__item-box navigation">
                        {navContent(scrollWidth, userUid)}
                    </nav>
    
                    <div className="header__item-box">
                        {itemBoxContent(scrollWidth)}
                    </div>

                </div>
            </header>
}

function navContent(scrollWidth: number, userUid: string){
    if(scrollWidth > 425){
        return <>
            <div className="header__item"><NavLink to={'/info'}>О нас</NavLink></div>
            <div className="header__item"><NavLink to={'/rent'}>Аренда</NavLink></div>
            <div className="header__item"><NavLink to={'/delivery'}>Доставка</NavLink></div>
            <div className="header__item"><NavLink to={'/whereToRide'}>Где кататься</NavLink></div>
            <div className="header__item"><NavLink to={'/contact'}>Контакты</NavLink></div>
        </> 
    }

    if(scrollWidth <= 425){
        return<>
            <div onClick={burgerClick} className="header__item"><NavLink to={'/info'}>О нас</NavLink></div>
            <div onClick={burgerClick} className="header__item"><NavLink to={'/rent'}>Аренда</NavLink></div>
            <div onClick={burgerClick} className="header__item"><NavLink to={'/delivery'}>Доставка</NavLink></div>
            <div onClick={burgerClick} className="header__item"><NavLink to={'/whereToRide'}>Где кататься</NavLink></div>
            <div onClick={burgerClick} className="header__item"><NavLink to={'/contact'}>Контакты</NavLink></div>

            <div className="header__item-box mobile">
                {userUid ?
                    <NavLink onClick={(e)=>{burgerClick(e); accountButtonClick(e)}} to={'/account'} id="accountButton" className="header__item blue">Личный кабинет</NavLink>
                :
                <div onClick={(e)=>{burgerClick(e); accountButtonClick(e)}} id="accountButton" className="header__item blue">Личный кабинет</div>
                }
                <div onClick={(e)=>{burgerClick(e); accountButtonClick(e)}} className="header__item">
                    <NavLink to={'/contact'}><button className="header__button">Обратная связь</button></NavLink>
                </div>
                <div className="header__item">RU</div>
            </div>
        </>
    }
}

function itemBoxContent(scrollWidth: number){
    if(scrollWidth > 768){
        return<>
            <div className="header__item blue">+971 52 563 4064</div>
            <div className="header__item">

                <button id="accountButton" onClick={accountButtonClick} className="header__button account">
                    <Image imageType="icon" imageName="account" sourseMod={true}/>

                    <div id="userButtonPopap" className="header__button-popap">
                        <NavLink to={'/account'} className="header__button-popap-item">Личный кабинет</NavLink>
                        <div id="logoutButton" onClick={()=>signOut(auth)} className="header__button-popap-item">Выйти</div>
                    </div>
                </button>

            </div>
            <div className="header__item">
                <NavLink to={'/contact'}><button className="header__button">Обратная связь</button></NavLink>
            </div>
            <div className="header__item">
                <div className="header__time-box">
                    <div className="header__time">12:50</div>
                    <div className="header__time-text">Время в Дубае</div>
                </div>
            </div>
            <div className="header__item bold">RU</div>
        </>
    }
    
    if(scrollWidth > 425 && scrollWidth <= 768){
        return<>
            <div className="header__item">
                <button className="header__button account">
                    <Image imageType="icon" imageName="account" sourseMod={true}/>
                </button>
            </div>
            <div className="header__item">
                <NavLink to={'/contact'}><button className="header__button">Обратная связь</button></NavLink>
            </div>
            <div className="header__item">
                <div className="header__time-box">
                    <div className="header__time">12:50</div>
                    {scrollWidth > 768 || scrollWidth < 426  ? <div className="header__time-text">Время в Дубае</div> : ''}
                </div>
            </div>
            <div id="burger" onClick={burgerClick} data-testid={'burger'} className="header__item burger"><span></span></div>
        </>
    }

    if(scrollWidth <= 425){
        return <>
            <div className="header__item">
                <div className="header__time-box">
                    <div className="header__time">12:50</div>
                    <div className="header__time-text">Время в Дубае</div>
                </div>
            </div>
            <div id="burger" onClick={burgerClick} data-testid={'burger'} className="header__item burger"><span></span></div>
        </>
    }
}