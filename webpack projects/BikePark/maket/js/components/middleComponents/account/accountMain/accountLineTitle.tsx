import React from "react";

export default ()=>{
    return (
        <li id="orderPreview" className="account__order">
            <div className="account__order-main">
                <div className="account__order-title title">Номер заказа</div>
                <div className="account__order-data title">Дата</div>
                <div className="account__order-prise title">Стоимость</div>
                <div className="account__order-state title">Оплата</div>
                <div className="account__order-status title">Статус</div>
            </div>
        </li>
    )
}