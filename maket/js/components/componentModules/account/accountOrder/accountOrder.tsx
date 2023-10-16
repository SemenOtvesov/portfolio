import { Torder } from "@js/types/orderType";
import React, { useMemo } from "react";
import accountOrderMoreItem from "../accountOrderMoreItem/accountOrderMoreItem";
import { getScrollWidthLocal } from "@js/mainFunctions/localState/scrollWidth";
import { NavLink } from "react-router-dom";
import accountOrderClick from '@events/click/accountOrderClick/accountOrderClick'
import deleteOrderButtonClick from '@events/click/deleteOrderButtonClick/deleteOrderButtonClick'
import { getFinishDate, getStartDate } from "@js/components/middleComponents/rent/getFunctions";
import { TbikeRentInfo } from "@js/types/state/rentStateTypes";
import getBikeSelect from "@js/components/middleComponents/rent/rentParam/getBikeSelect";

export default (order: Torder, bikeRentInfo: [] | TbikeRentInfo, scrollWidth: number)=>{
    const bikeList = getBikeSelect(bikeRentInfo, order.bikeRentList)

    return (
        <li id="accountOrder" onClick={accountOrderClick} key={Math.random()} className="account__order">
            <div className="account__order-main">
                <div className="account__order-title">
                    {scrollWidth > 425 ? <div id="accountOrderArrow" className="account__order-arrow"></div> : ''}
                    <div className="account__order-title-text">Заказ {order.orderId}</div>
                </div>
                <div className="account__order-data">{getStartDate(order.points)}</div>
                <div className="account__order-prise">{order.prise} AED</div>
                <div className="account__order-state">{order.paidState === 'paid' ? "Оплачен" : "Не оплачен"}</div>
                <div className={statusClass(order.deliveryState)}>{statusOrder(order.deliveryState)}</div>
            </div>

            <div id="accountOrderMore" className="account__order-more">
                <ul className="account__order-more-top">

                    <li className="account__order-more-top-line">
                        <div className="account__order-more-top-title title">Велосипеды</div>
                        <div className="account__order-more-top-prise title">Цена</div>
                        <div className="account__order-more-top-quantity title">
                            {getScrollWidthLocal() > 1024 ? 'Количество дней' : 'Кол-во дней'}
                        </div>
                        <div className="account__order-more-top-fullPrise title">Сумма</div>
                    </li>

                    {bikeList.map(el=>accountOrderMoreItem(el))}

                </ul>
                <div className="account__order-more-bottom">
                    <div className="account__order-more-bottom-result">
                        <div className="account__order-more-bottom-result-item">
                            <div className="account__order-more-bottom-result-title">Доставка</div>
                            <div className="account__order-more-bottom-result-text">0 AED</div>
                        </div>
                        <div className="account__order-more-bottom-result-item">
                            <div className="account__order-more-bottom-result-title">Итого</div>
                            <div className="account__order-more-bottom-result-text"><span>300 AED</span></div>
                        </div>
                    </div>
                    <div className="account__order-more-bottom-main">
                        <div className="account__order-more-bottom-left">
                            <div className="account__order-more-bottom-left-item">
                                Тип аренды: {order.typeRentDate  === 'hour' ? '2 часа' : 'По дням'}
                            </div>
                            <div className="account__order-more-bottom-left-item">
                                Период аренды: {getStartDate(order.points)} - {getFinishDate(order.points)}
                            </div>
                            <div className="account__order-more-bottom-left-item">
                                Тип оплаты: {order.typePayment === 'plase' ? 'На месте' : 'Онлайн'}
                            </div>
                            <div className="account__order-more-bottom-left-item">
                                Тип доставки: {order.typeRentPlase === 'address' ? 'Доставка' : 'Самовывоз'}
                            </div>
                        </div>
                        <div className="account__order-more-bottom-right">
                            <a id="deleteOrderButton" onClick={deleteOrderButtonClick} data-button-type="toggle" className="account__order-more-bottom-button white genButton">Отменить заказ</a>
                            <NavLink to={'/exendLease'} id="exendLease" className="account__order-more-bottom-button genButton">Продлить аренду</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        )
}

function statusOrder(status: string): string{
    if(status === 'processing'){return 'В обработке'}
    if(status === 'delivered'){return 'Доставляется'}
    if(status === 'work'){return 'В работе'}
    if(status === 'completed'){return 'Завершен'}
    return ''
}
function statusClass(status: string): string{
    if(status === 'processing'){return 'account__order-status processing'}
    if(status === 'delivered'){return 'account__order-status delivered'}
    if(status === 'work'){return 'account__order-status work'}
    if(status === 'completed'){return 'account__order-status completed'}
    return ''
}