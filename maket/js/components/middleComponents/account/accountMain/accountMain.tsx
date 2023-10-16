import accountOrder from "@js/components/componentModules/account/accountOrder/accountOrder";
import React from "react";
import { userInfoContent } from "../userInfoContent/userInfoContent";
import selectOrderClick from '@events/click/selectOrderClick/selectOrderClick'
import userEditParamButtonClick from '@events/click/userEditParamButtonClick/userEditParamButtonClick'
import { ToutletContext } from "@js/types/outletContext";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { userStateInterfase } from "@js/types/state/userStateTypes";

export default ()=>{
    const {scrollWidth}: ToutletContext = useOutletContext()
    const orderList = useSelector((state: userStateInterfase)=>state.userRouter.user.orderList)
    const bikeRentInfo = useSelector((state: userStateInterfase)=>state.rentRouter.bikeRentInfo)

    return <div className="account wrapper-component">
        <div className="wrapper-component-title">Личный кабинет</div>

        <div className="account__param-box">
            <div id="selectOrder" onClick={selectOrderClick} data-set-height-children data-order-id="activeOrder" className="account__param active">Текущие заказы</div>
            <div id="selectOrder" onClick={selectOrderClick} data-set-height-children data-order-id="completedOrder" className="account__param">Выполненные заказы</div>
            <div id="selectOrder" onClick={selectOrderClick} data-set-height-children data-order-id="userInfo" className="account__param">Личные данные</div>
        </div>

        <ul className="account__order-list">

            <li id="orderPreview" className="account__order">
                <div className="account__order-main">
                    <div className="account__order-title title">Номер заказа</div>
                    <div className="account__order-data title">Дата</div>
                    <div className="account__order-prise title">Стоимость</div>
                    <div className="account__order-state title">Оплата</div>
                    <div className="account__order-status title">Статус</div>
                </div>
            </li>

            <div id="activeOrder" data-order-box className="account__order-box visable">
                {orderList?.map(el=>{
                    if(el.deliveryState !== 'completed'){return accountOrder(el, bikeRentInfo, scrollWidth)}
                })}
            </div>

            <div id="completedOrder" data-order-box className="account__order-box">
                {orderList?.map(el=>{
                    if(el.deliveryState === 'completed'){return accountOrder(el, bikeRentInfo, scrollWidth)}
                })}
            </div>

            <div id="userInfo" data-order-box className="account__order-box">
                {userInfoContent(scrollWidth)}
                <button id="userEditParamButton" onClick={userEditParamButtonClick} className="account__info-button genButton">Редактировать</button>
            </div>

        </ul>
    </div>
}