import { Torder } from "@js/types/orderType";
import React from "react";
import accountOrderClick from '@events/click/accountOrderClick/accountOrderClick'
import { TbikeRentInfo } from "@js/types/state/rentStateTypes";
import getBikeSelect from "@js/components/middleComponents/rent/rentParam/getBikeSelect";
import AccountOrderLine from "./accountOrderLine";
import AccountOrderMore from "./accountOrderMore";

export default (order: Torder, bikeRentInfo: [] | TbikeRentInfo, scrollWidth: number)=>{
    const bikeList = getBikeSelect(bikeRentInfo, order.bikeRentList)

    return (
        <li id="accountOrder" onClick={accountOrderClick} key={Math.random()} className="account__order">
            <AccountOrderLine scrollWidth={scrollWidth} order={order}/>
            <AccountOrderMore order={order} bikeList={bikeList}/>
        </li>
        )
}