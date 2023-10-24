import { getScrollWidthLocal } from "@js/mainFunctions/localState/scrollWidth";
import React from "react";
import accountOrderMoreItem from "../accountOrderMoreItem/accountOrderMoreItem";
import { getFinishDate, getStartDate } from "@js/components/middleComponents/rent/getFunctions";
import { Torder } from "@js/types/orderType";
import { TbikeRentCard } from "@js/types/state/rentStateTypes";
import { NavLink } from "react-router-dom";
import deleteOrderButtonClick from '@events/click/deleteOrderButtonClick/deleteOrderButtonClick'
import { Tpoints } from "@js/types/state/calendarsTypes";
import { useDispatch } from "react-redux";

type Tprops = {
    order: Torder,
    bikeList: TbikeRentCard[]
}

export default ({order, bikeList}: Tprops)=>{
    const dispatch = useDispatch()
    return (
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

                    {bikeList.map(el=>accountOrderMoreItem(el, calcDayRent(order.points)))}

                </ul>
                <div className="account__order-more-bottom">
                    <div className="account__order-more-bottom-result">
                        <div className="account__order-more-bottom-result-item">
                            <div className="account__order-more-bottom-result-title">Доставка</div>
                            <div className="account__order-more-bottom-result-text">
                                {order.typeRentPlase === 'address' ? 50 : 0} AED
                            </div>
                        </div>
                        <div className="account__order-more-bottom-result-item">
                            <div className="account__order-more-bottom-result-title">Итого</div>
                            <div className="account__order-more-bottom-result-text">
                                <span>{order.typeRentPlase === 'address' ? 50 + order.prise : order.prise} AED</span>
                            </div>
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
                            <div 
                                onClick={()=>deleteOrderButtonClick({dispatch, type: 'toggle', id: order.orderId})} 
                                className="account__order-more-bottom-button white genButton"
                            >
                                Отменить заказ
                            </div>
                            <NavLink to={'/exendLease'} id="exendLease" className="account__order-more-bottom-button genButton">Продлить аренду</NavLink>
                        </div>
                    </div>
                </div>
            </div>
    )
}

function calcDayRent(points: Tpoints){
    const startPoint = points.startPoint
    const endPoint = points.endPoint

    if(!(startPoint.year && startPoint.month && startPoint.day)){return}
    const startDateTmSs = new Date(startPoint.year, startPoint.month, startPoint.day)
    
    if(!(endPoint.year && endPoint.month && endPoint.day)){return}
    const endDateTmSs = new Date(endPoint.year, endPoint.month, endPoint.day)
    const difDate = (+endDateTmSs - +startDateTmSs)/86400000

    if(difDate < 1){return '>1'}else{
        return `${difDate}`
    }
}