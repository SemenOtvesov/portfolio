import React from "react"

export function userInfoContent(scrollWidth: number){
    if(scrollWidth > 768){
        return <>
        <div className="account__info-line">
            <div className="delivery__item-card">
                <div className="delivery__item-card-title">Имя</div>
                <input className="delivery__item-card-text account__info-input disabled" disabled defaultValue={'Александр'}></input>
            </div>
            <div className="delivery__item-card">
                <div className="delivery__item-card-title">E-mail</div>
                <input className="delivery__item-card-text account__info-input disabled" disabled defaultValue={'example@gmail.com'}></input>
            </div>
            <div className="delivery__item-card">
                <div className="delivery__item-card-title">Пароль</div>
                <input className="delivery__item-card-text account__info-input disabled" disabled defaultValue={'*************'}></input>
            </div>
        </div>
        
        <div className="account__info-line">
            <div className="delivery__item-card">
                <div className="delivery__item-card-title">Номер телефона</div>
                <input className="delivery__item-card-text account__info-input disabled" disabled defaultValue={'999 999 999'}></input>
            </div>
            <div className="delivery__item-card">
                <div className="delivery__item-card-title">Адрес доставки</div>
                <input className="delivery__item-card-text account__info-input disabled" disabled defaultValue={'г. А, ул. АБВГ, д. 1'}></input>
            </div>
            <div className="delivery__item-card">
                <div className="delivery__item-card-title"></div>
                <div className="delivery__item-card-text"></div>
            </div>
        </div>
        </>
    }else{
        return <>
        <div className="account__info-line">
            <div className="delivery__item-card">
                <div className="delivery__item-card-title">Имя</div>
                <input className="delivery__item-card-text account__info-input disabled" disabled defaultValue={'Александр'}></input>
            </div>
            <div className="delivery__item-card">
                <div className="delivery__item-card-title">E-mail</div>
                <input className="delivery__item-card-text account__info-input disabled" disabled defaultValue={'example@gmail.com'}></input>
            </div>
        </div>
        
        <div className="account__info-line">
            <div className="delivery__item-card">
                <div className="delivery__item-card-title">Номер телефона</div>
                <input className="delivery__item-card-text account__info-input disabled" disabled defaultValue={'999 999 999'}></input>
            </div>
            <div className="delivery__item-card">
                <div className="delivery__item-card-title">Адрес доставки</div>
                <input className="delivery__item-card-text account__info-input disabled" disabled defaultValue={'г. А, ул. АБВГ, д. 1'}></input>
            </div>
        </div>

        <div className="account__info-line">
            <div className="delivery__item-card">
                <div className="delivery__item-card-title">Пароль</div>
                <input className="delivery__item-card-text account__info-input disabled" disabled defaultValue={'*************'}></input>
            </div>
            <div className="delivery__item-card">
                <div className="delivery__item-card-title"></div>
                <div className="delivery__item-card-text"></div>
            </div>
        </div>
        </>
    }
}