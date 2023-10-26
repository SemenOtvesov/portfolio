import React, { useEffect } from "react"
import { UseFormReturn, useForm } from "react-hook-form"
import { TuserInfoForm } from "./formTypes"
import UserInfoInputBox from "./userInfoInputBox"
import { userStateInterfase } from "@js/types/state/userStateTypes"
import { useSelector } from "react-redux"

type Tprops = {
    scrollWidth: number, 
    editUserInfo: boolean,
    formObj: UseFormReturn<TuserInfoForm, any, undefined>
}

export default function userInfoContent({scrollWidth, editUserInfo, formObj}: Tprops){
    const {register, formState: {errors}, watch} = formObj
    if(scrollWidth > 768){
        return (
            <>
                <div className="account__info-line">
                    <UserInfoInputBox
                        nameInput='name' register={register} edit={editUserInfo} watch={watch} errors={errors}
                    />
                    <UserInfoInputBox 
                        nameInput='mail' register={register} edit={editUserInfo} watch={watch} errors={errors}
                    />
                    <UserInfoInputBox
                        nameInput='pass' register={register} edit={editUserInfo} watch={watch} errors={errors}
                    />
                </div>

                <div className="account__info-line">
                    <UserInfoInputBox
                        nameInput='phone' register={register} edit={editUserInfo} watch={watch} errors={errors}
                    />
                    <UserInfoInputBox
                        nameInput='adress' register={register} edit={editUserInfo} watch={watch} errors={errors}
                    />
                    <div className="delivery__item-card">
                        <div className="delivery__item-card-title"></div>
                        <div className="delivery__item-card-text"></div>
                    </div>
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className="account__info-line">
                    <UserInfoInputBox
                        nameInput='name' register={register} edit={editUserInfo} watch={watch} errors={errors}
                    />
                    <UserInfoInputBox
                        nameInput='mail' register={register} edit={editUserInfo} watch={watch} errors={errors}
                    />
                </div>
                
                <div className="account__info-line">
                    <UserInfoInputBox
                        nameInput='phone' register={register} edit={editUserInfo} watch={watch} errors={errors}
                    />
                    <UserInfoInputBox
                        nameInput='adress' register={register} edit={editUserInfo} watch={watch} errors={errors}
                    />
                </div>

                <div className="account__info-line">
                    
                    <div className="delivery__item-card">
                        <div className="delivery__item-card-title"></div>
                        <div className="delivery__item-card-text"></div>
                    </div>
                </div>
            </>
        )
    }
}