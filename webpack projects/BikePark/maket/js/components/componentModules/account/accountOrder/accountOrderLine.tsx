import { getStartDate } from "@js/components/middleComponents/rent/getFunctions";
import { Torder } from "@js/types/orderType";
import React from "react";

type Tprops = {
    scrollWidth: number, 
    order: Torder
}

export default ({scrollWidth, order}: Tprops)=>{
    return (
        <div className="account__order-main">
            <div className="account__order-title">
                {scrollWidth > 425 ? <div id="accountOrderArrow" className="account__order-arrow"></div> : ''}
                <div className="account__order-title-text">Заказ {order.orderId}</div>
            </div>
            <div className="account__order-data">{getStartDate(order.points)}</div>
            <div className="account__order-prise">
                {order.typeRentPlase === 'address' ? 50 + order.prise : order.prise} AED
            </div>
            <div className="account__order-state">{order.paidState === 'paid' ? "Оплачен" : "Не оплачен"}</div>
            <div className={statusClass(order.deliveryState)}>{statusOrder(order.deliveryState)}</div>
        </div>
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