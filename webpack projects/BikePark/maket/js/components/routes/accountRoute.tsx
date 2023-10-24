import setHeightChildrenOfParent from "@js/mainFunctions/setDOM/setHeightChildrenOfParent";
import { ToutletContext } from "@js/types/outletContext";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import accountMain from "@middleComponents/account/accountMain/accountMain";
import accountButtonClick from '@events/click/accountButtonClick/accountButtonClick'
import AccountMain from "@middleComponents/account/accountMain/accountMain";

export default ()=>{
    const {userUid}: ToutletContext = useOutletContext()

    useEffect(()=>{
        setHeightChildrenOfParent()
    })

    if(userUid){
        return <div key={'account__container'} className="account__container">
            <AccountMain/>
        </div>
    }else{
        return <div id="setHeightChildren" key={'account__unduser'} className="account__unduser">
            <div className="account__botton-reg-box">
                <div className="account__botton-reg-text">Вы не авторизированны, пожалуйста войдите в аккаунт</div>
                <button id="accountButton"  onClick={accountButtonClick} className="account__botton-reg genButton">Войти</button>
            </div>
        </div>
    }
}