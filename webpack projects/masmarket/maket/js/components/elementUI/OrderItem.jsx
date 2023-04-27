import React from "react";

const monthList = ['января',  'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

export default ({order})=>{
    const date = new Date(+order.date)
    const endDate = new Date(+order.endDate)
    return(
        <div className="mainOrder__item bchGray">
            <div className="mainOrder__item-top">
                <div className="mainOrder__item-top-left">
                    <div className="mainOrder__item-top-title">{`Заказ от ${date.getDate()} ${monthList[date.getMonth()]}` }</div>
                    <div className="mainOrder__item-top-number">{order.number}</div>
                </div>
                <div className="mainOrder__item-top-right">
                    <div className="mainOrder__item-prise">
                        {order.state ? 'оплачено ' : 'ожидает оплаты '}
                        <span>{order.prise} ₽</span>
                    </div>
                </div>
            </div> 
            <div className="mainOrder__item-bottom">
                <div className="mainOrder__item-bottom-left">
                    <div>
                        <div className="mainOrder__item-bottom-title">Доставка в пункт выдачи</div>
                        <div className="mainOrder__item-bottom-text">Дата доставки: 
                        {' ' + endDate.getDate()} {monthList[endDate.getMonth()]} в 19:00</div>
                    </div>
                    <button className="mainOrder__item-bottom-button">Oценить доставку</button>
                </div>
                <div className="mainOrder__item-bottom-right">
                    <picture id="equalSides" data-prod-id="prod" data-prod-name={order.prodId} className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                    </picture>
                </div>
            </div>
        </div>
    )
}