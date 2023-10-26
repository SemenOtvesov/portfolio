import { TbikeRentCard } from "@js/types/state/rentStateTypes";
import React from "react";

export default (order: TbikeRentCard, dayQuantity: string | undefined)=>{
    return (
        <li key={Math.random()} className="account__order-more-top-line">
            <div className="account__order-more-top-title">{order.title}</div>
            <div className="account__order-more-top-prise">{order.prise}</div>
            <div className="account__order-more-top-quantity">{dayQuantity ? dayQuantity : 1}</div>
            <div className="account__order-more-top-fullPrise">{order.prise} AED</div>
        </li>
    )
}