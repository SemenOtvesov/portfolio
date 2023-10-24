import React, { useState } from "react";
import { ToutletContext } from "@js/types/outletContext";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import OrderBox from "./orderBox";
import AccountUserInfo from "./accountUserInfo";

export default ()=>{
    const {scrollWidth}: ToutletContext = useOutletContext()
    const orderList = useSelector((state: userStateInterfase)=>state.userRouter.user.orderList)
    const bikeRentInfo = useSelector((state: userStateInterfase)=>state.rentRouter.bikeRentInfo)
    const [activeOrderList, setActiveOrderList] = useState<"active" | "completed" | "userInfo">('active')
    const [editUserInfo, setEditUserInfo] = useState<boolean>(false)

    return <div className="account wrapper-component">
        <div className="wrapper-component-title">Личный кабинет</div>

        <div className="account__param-box">
            <div 
                onClick={(e)=>setActiveOrderList('active')} 
                className={`account__param ${activeOrderList === 'active' ? 'active' : ''}`}
            >Текущие заказы</div>
            <div 
                onClick={(e)=>setActiveOrderList('completed')} 
                className={`account__param ${activeOrderList === 'completed' ? 'active' : ''}`}
            >Выполненные заказы</div>
            <div 
                onClick={(e)=>setActiveOrderList('userInfo')} 
                className={`account__param ${activeOrderList === 'userInfo' ? 'active' : ''}`}
            >Личные данные</div>
        </div>

        <ul className="account__order-list">

            <OrderBox 
                type="active" 
                orderList={orderList} 
                scrollWidth={scrollWidth} 
                bikeRentInfo={bikeRentInfo}
                className={activeOrderList === 'active' ? 'visable' : undefined}
                activeOrderList={activeOrderList}
            />
            
            <OrderBox 
                type="completed" 
                orderList={orderList} 
                scrollWidth={scrollWidth} 
                bikeRentInfo={bikeRentInfo}
                className={activeOrderList === 'completed' ? 'visable' : undefined}
                activeOrderList={activeOrderList}
            />

            <AccountUserInfo
                activeOrderList={activeOrderList}
                scrollWidth={scrollWidth}
                editUserInfo={editUserInfo}
                setEditUserInfo={setEditUserInfo}
            />

        </ul>
    </div>
}