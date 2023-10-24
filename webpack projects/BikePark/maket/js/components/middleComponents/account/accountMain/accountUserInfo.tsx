import React, { useEffect } from "react";
import UserInfoContent from "../userInfoContent/userInfoContent";
import { useSelector } from "react-redux";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import { TuserInfoForm } from "../userInfoContent/formTypes";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@js/hooks/useAppDispatch";
import requestSetUserInfo from "@state/userState/requests/actions/requestSetUserInfo";

type Tprops = {
    activeOrderList: "active" | "completed" | "userInfo",
    scrollWidth: number,
    editUserInfo: boolean,
    setEditUserInfo(value: React.SetStateAction<boolean>): void
}

export default ({activeOrderList, scrollWidth, editUserInfo, setEditUserInfo}: Tprops)=>{
    const dispatch = useAppDispatch()
    const user = useSelector((state:userStateInterfase)=>state.userRouter.user)
    const formObj = useForm<TuserInfoForm>({
        mode: "onChange"
    })
    useEffect(()=>{
        const defaultValues = {
            name: user.name ? user.name : '',
            mail: user.mail ? user.mail : '',
            pass: user.pass ? user.pass : '',
            phone: user.phone ? user.phone : '',
            adress: user.addressDelivery ? user.addressDelivery : ''
        }
        formObj.reset(defaultValues)
    }, [user])
    return (
        <form 
            onSubmit={formObj.handleSubmit(data=>dispatch(requestSetUserInfo(data)))}
            className={`account__order-box ${activeOrderList === 'userInfo' ? 'visable' : undefined}`}
        >
            <UserInfoContent scrollWidth={scrollWidth} editUserInfo={editUserInfo} formObj={formObj}/>
            <div onClick={()=>setEditUserInfo(s=>!s)}>
                <button type={editUserInfo ? 'button' : 'submit'} className="account__info-button genButton">
                    {editUserInfo ? 'Сохранить' : 'Редактировать'}
                </button>
            </div>
        </form>
    )
}