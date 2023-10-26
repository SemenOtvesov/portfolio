import React from "react";
import deleteOrderButtonClick from '@events/click/deleteOrderButtonClick/deleteOrderButtonClick'
import { useSelector } from "react-redux";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import { useAppDispatch } from "@js/hooks/useAppDispatch";

export default ()=>{
    const deleteOrderId = useSelector((state: userStateInterfase)=>state.userRouter.deleteOrderId)
    const dispatch = useAppDispatch()
    return (
        <div className={`orderDelete ${deleteOrderId && "active"}`}>
            <div className="orderDelete__text">Вы уверены, что хотите отменить заказ? Это действие нельзя будет отменить.</div>
            <button 
                onClick={()=>deleteOrderButtonClick({dispatch, type: 'submit'})} 
                className="orderDelete__button genButton"
            >
                Отменить заказ
            </button>
            <button 
                onClick={()=>deleteOrderButtonClick({dispatch, type: 'clear'})} 
                className="orderDelete__button genButton white"
            >
                Оставить все как есть
            </button>
        </div>
    )
}