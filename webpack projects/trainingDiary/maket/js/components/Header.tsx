import { Iuser } from "@js/types/stateTypes";
import React from "react";

export default({user}: {user: Iuser})=>{
    if(!Object.values(user)[0]){return<></>}

    return <>
        <div id="header" className="header">
            <div className="header__container">
                <div className="header__item">
                    <div className="header__item-element">
                        <picture className="header__item-logo">
                            <source srcSet=""/>
                            <img src="./img/icon/logo.png" alt="" />
                        </picture>
                    </div>
                    <div className="header__item-element">
                        <div className="header__item-text bold">{user.name}</div>
                    </div>
                </div>
                <div className="header__item">
                    <div className="header__item-element">
                        <button id="logoutButton" className="header__item-button">Выйти</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}