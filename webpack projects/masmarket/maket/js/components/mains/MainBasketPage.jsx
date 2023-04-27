import React, {useEffect} from "react";
import BasketProducts from "@midleComponents/BasketProducts.jsx";
import AllUser from "@midleComponents/AllUser.jsx";


export default (props)=>{
    let scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );

    useEffect(()=>{
        scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );
        if(scrollWidth < 769){
            mobileFooterMargin(scrollWidth)
        }
    })

    if(props.user){
        const pcV = 
        <div id="mainBasketRight" className="bchGray mainBasket__right">
            <div className="mainBasket__right-item">
                <button id="makingOrderBtn"  className="mainBasket__right-button">Перейти к оформлению</button>
                <div className="mainBasket__right-text">
                    Доступные способы и время доставки можно выбрать при оформлении заказа
                </div>
            </div>
            <div className="mainBasket__right-item">
                <div className="mainBasket__right-item-box">
                    <div className="mainBasket__right-item-title">Ваша корзина</div>
                    <div id="quantAndWeightAllProd" className="mainBasket__right-item-text gray"> </div>
                </div>
                <div className="mainBasket__right-item-box">
                    <div className="mainBasket__right-item-text">Товары ({props.userBasketProds ? props.userBasketProds.length : ''})</div>
                    <div id="oldPriseAllProd" className="mainBasket__right-item-text bold"> </div>
                </div>
                <div className="mainBasket__right-item-box">
                    <div className="mainBasket__right-item-minibox">
                        <div className="mainBasket__right-item-text">Скидка</div>
                        <div className="mainBasket__right-item-text blue">Подробнее</div>
                    </div>
                    <div id="installmentAllProd" className="mainBasket__right-item-text bold red"> </div>
                </div>
            </div>
            <div className="mainBasket__right-item">
                <div className="mainBasket__right-item-box">
                    <div className="mainBasket__right-item-title">Общая стоимость</div>
                    <div id="newPriseAllProd" className="mainBasket__right-item-title-prise"> </div>
                </div>
            </div>
        </div>;

        const mbV = 
        <div id="mainBasketRight" className="bchGray mainBasket__right">
            <div className="mainBasket__right-item">
                <div id="newPriseAllProd" className="mainBasket__right-item-title-prise"> </div>
                <div id="quantAndWeightAllProd" className="mainBasket__right-item-text gray"> </div>
            </div>
            <div className="mainBasket__right-item">
                <button id="makingOrderBtn" className="mainBasket__right-button">Перейти к оформлению</button>
            </div>
        </div>;

        return(
            <div className="mainBasket">
                <div className="mainBasket__container">
                    <div className="mainBasket__title">Корзина</div>
                    <div className="mainBasket__box">
                        <div className="mainBasket__left bchGray">
                            <div className="mainBasket__list">
                                <div className="mainBasket__list-top">
                                    <button data-input-ch-all='true' id="inputCh" className="mainBasket__list-button-all">
                                        <div className="inputCh active"><input type="checked"/></div>
                                        <span>Выбрать все</span>
                                    </button>
                                    <button id="basketDeletProdBtn" className="mainBasket__list-button-del">Удалить выбранные</button>
                                </div>
                                <div className="mainBasket__list-bottom">
                                    <BasketProducts idList={props.userBasketProds} quantityEl={props.quantityEl}/>
                                </div>
                            </div>
                        </div>
                        {props.quantityEl(pcV,scrollWidth > 1023 ? pcV :mbV,mbV,)}
                        <div id="makingOrderPopap" className="mainUserProfile__popap mainBasket__popap">
                            <div className="mainUserProfile__popap-wraper">
                                <div className="mainUserProfile__popap-title"><div></div><span onClick={clickLogin}></span></div>
                                <div className="mainBasket__popap-text">Спасибо за ваш заказ, с вами свяжется наш менджер</div>
                                <button onClick={clickLogin} className="mainBasket__popap-button">Ожидать</button>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        )
    }else{
        return <AllUser/>
    }
}

function mobileFooterMargin(scrollWidth){
    const footer = document.querySelector('.footer')
    const headerItemBtnBox = document.getElementById('headerItemBtnBox')
    const mainBasketRight = document.getElementById('mainBasketRight')

    if(mainBasketRight){
        if(scrollWidth > 425){
            footer.style.marginBottom = mainBasketRight.offsetHeight + 'px'
        }else{
            mainBasketRight.style.bottom = headerItemBtnBox.offsetHeight + 'px'
            footer.style.marginBottom = mainBasketRight.offsetHeight + headerItemBtnBox.offsetHeight + 'px'
        }
    }
}

function clickLogin(){
    const body = document.querySelector('body')
    const bodyBlur = document.querySelector('.body-blackBlur')
    const popap = document.getElementById('makingOrderPopap')
    body.classList.toggle('hidden')
    bodyBlur.classList.toggle('active')
    popap.classList.toggle('active')
}