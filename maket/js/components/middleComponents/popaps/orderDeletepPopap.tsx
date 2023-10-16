import React from "react";
import deleteOrderButtonClick from '@events/click/deleteOrderButtonClick/deleteOrderButtonClick'

export default ()=>{
    return <div id="deleteOrderPopap" className="orderDelete">
        <div className="orderDelete__text">Вы уверены, что хотите отменить заказ? Это действие нельзя будет отменить.</div>
        <button id="deleteOrderButton" onClick={deleteOrderButtonClick} data-button-type='submit' className="orderDelete__button genButton">Отменить заказ</button>
        <button id="deleteOrderButton" onClick={deleteOrderButtonClick} data-button-type='toggle' className="orderDelete__button genButton white">Оставить все как есть</button>
    </div>
}