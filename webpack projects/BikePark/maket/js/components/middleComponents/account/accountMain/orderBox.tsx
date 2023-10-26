import accountOrder from "@js/components/componentModules/account/accountOrder/accountOrder";
import { TorderList } from "@js/types/orderType";
import { TbikeRentInfo } from "@js/types/state/rentStateTypes";
import React from "react";
import AccountLineTitle from "./accountLineTitle";

interface Tprops extends React.HTMLAttributes<HTMLDivElement> {
    type: 'active' | 'completed'
    orderList: TorderList | undefined,
    bikeRentInfo: [] | TbikeRentInfo, 
    scrollWidth: number,
    activeOrderList: "active" | "completed" | "userInfo"
}

export default ({type, orderList, bikeRentInfo, scrollWidth, activeOrderList, ...props}: Tprops)=>{
    if(checkOrders({type, activeOrderList, orderList})){
        return <div {...props} className={
            `account__order-box ${props.className ? props.className : ''} absenceOrder`
        }>Заказы не найдены</div>
    }else{
        return (
            <>
                <AccountLineTitle/>
                <div {...props} className={
                    `account__order-box ${props.className ? props.className : ''}`
                }>
                    {orderList?.map(el=>{
                        if(type === 'active'){
                            if(el.deliveryState !== 'completed'){
                                return accountOrder(el, bikeRentInfo, scrollWidth)
                            }
                        }else if(el.deliveryState === 'completed'){
                            return accountOrder(el, bikeRentInfo, scrollWidth)
                        }
                    })}
                </div>
            </>
        )
    }
}
type TcheckOrdersParam = {
    type: 'active' | 'completed'
    orderList: TorderList | undefined,
    activeOrderList: "active" | "completed" | "userInfo"
}

function checkOrders({type, orderList, activeOrderList}: TcheckOrdersParam){
    if(!orderList){return true}
    if(type === 'active'){
        if(activeOrderList === 'active'){
            if(orderList.find(order=>order.deliveryState !== 'completed')){
                return false
            }
        }
    }
    if(type === 'completed'){
        if(activeOrderList === 'completed'){
            if(orderList.find(order=>order.deliveryState === 'completed')){
                return false
            }
        }
    }
    return true
}