import React from "react";
import { useForm } from "react-hook-form";
import RentCheckBox from "./rentCheckBox";
import { TrentForm, TrentFormInputNames } from "./rentFormGeneric";
import rentFormSubmit from "@events/submit/rentFormSubmit/rentFormSubmit";
import { useSelector } from "react-redux";
import { TselectBikeList, userStateInterfase } from "@js/types/state/userStateTypes";
import { getFinishDate, getFinishTime } from "../getFunctions";

import GlobalInput from "@componentModules/formElements/input/globalInput";
import InputGroupe from "@componentModules/formElements/input/inputGroupe";
import RightDie from "@componentModules/formElements/input/rightDie";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@js/hooks/useAppDispatch";
import { TbikeRentCard } from "@js/types/state/rentStateTypes";

import getFullPrise from '../calcFullPrise'

type Tprops = {
    selectBikeList: TselectBikeList | undefined,
    bikeList:  TbikeRentCard[]
}

export default ({selectBikeList, bikeList}: Tprops)=>{
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const selectBikeCalendar = useSelector((state: userStateInterfase)=>state.calendarsRouter.selectBikeCalendar)
    const timeStart = useSelector((state: userStateInterfase)=>state.calendarsRouter.timeStart)
    const activeTypeRentDate = useSelector((state: userStateInterfase)=>state.calendarsRouter.activeTypeRentDate)
    const activeTypeRentPlase = useSelector((state: userStateInterfase)=>state.calendarsRouter.activeTypeRentPlase)

    const {register, formState: {errors}, handleSubmit, control, watch} = useForm<TrentForm>({
        mode: "onChange",
        defaultValues: {payment: 'online'}
    })

    return (
        <form 
            onSubmit={handleSubmit((data)=>rentFormSubmit({
                data, 
                navigate, 
                bikeList,
                selectBikeList, 
                dispatch,
                dateInfo: {timeStart, activeTypeRentDate, activeTypeRentPlase, points: selectBikeCalendar},
                prise: getFullPrise(bikeList),
            }))} 
            className="rentForm wrapper-component"
        > 
            <div className="rentForm__top">

                <div className="rentForm__left">
                    <div className="rentForm__item">
                        <div className="rentForm__item-title">Контактные данные</div>
                        <InputGroupe>
                            <GlobalInput<TrentForm, TrentFormInputNames>
                                nameInput="nameInput"
                                requiredText={true}
                                register={register}
                                regExp={/[а-яА-Я]/}
                                className="rentForm__item-input inputArea"  
                                placeholder="Имя*" 
                                type="text"
                            />
                            <RightDie 
                                error={errors.nameInput} 
                                value={watch('nameInput')} 
                                className="rentForm__item-input-rightDie"
                            />
                        </InputGroupe>
                        <InputGroupe>
                            <GlobalInput<TrentForm, TrentFormInputNames>
                                nameInput="telInput"
                                requiredText={true}
                                register={register} 
                                regExp={/^[+7|7|8][0-9]{10,12}$/}
                                className="rentForm__item-input inputArea"  
                                placeholder="Номер телефона*" 
                                type='text'
                            />
                            <RightDie 
                                error={errors.telInput} 
                                value={watch('telInput')}  
                                className="rentForm__item-input-rightDie"
                            />
                        </InputGroupe>
                    </div>
        
                    <div className="rentForm__item">
                        <div className="rentForm__item-title">Информация о доставке</div>
                        <InputGroupe>
                            <GlobalInput<TrentForm, TrentFormInputNames>
                                nameInput="startAdresInput"
                                requiredText={true}
                                register={register} 
                                regExp={/[а-яА-Я](.[0-9])?/}
                                className="rentForm__item-input inputArea"  
                                placeholder="Адрес*" 
                                type='text'
                            />
                            <RightDie 
                                error={errors.startAdresInput} 
                                value={watch('startAdresInput')}  
                                className="rentForm__item-input-rightDie"
                            />
                        </InputGroupe>
                    </div>
        
                    <div className="rentForm__item">
                        <div className="rentForm__item-title">Форма оплаты</div>
                        <div className="rentForm__item-checkbox-box">
                            <RentCheckBox
                                nameCheckBox="payment"
                                control={control}
                                checkType='online'
                            />
                            <RentCheckBox
                                nameCheckBox="payment"
                                control={control}
                                checkType='plase'
                            />
                        </div>
                    </div>
        
                </div>

                <div className="rentForm__right">
                    <div className="rentForm__item">
                        <div className="rentForm__item-title">Фактическая дата возврата велосипеда</div>
                        <div className="rentForm__item-date-box">
                            <div className="rentForm__item-date inputArea">{getFinishDate(selectBikeCalendar)}</div>
                            <div className="rentForm__item-date inputArea">{getFinishTime(activeTypeRentDate, timeStart)}</div>
                        </div>
                        <InputGroupe>
                            <GlobalInput<TrentForm, TrentFormInputNames>
                                nameInput="finAdresInput"
                                requiredText={true}
                                register={register} 
                                regExp={/[а-яА-Я](.[0-9])?/}
                                className="rentForm__item-input inputArea"  
                                placeholder="Возврат по адресу" 
                                type='text'
                            />
                            <RightDie 
                                error={errors.finAdresInput} 
                                value={watch('finAdresInput')} 
                                className="rentForm__item-input-rightDie"
                            />
                        </InputGroupe>
                    </div>
        
                    <div className="rentForm__info">
                        <div className="rentForm__info-item">
                            <div className="rentForm__info-item-title">Возвращение велосипеда</div>
                            <div className="rentForm__info-item-text">На возвращение велосипеда даётся 1 час. Задача организации, в особенности же сложившаяся структура организации позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач.</div>
                        </div>
                        <div className="rentForm__info-item">
                            <div className="rentForm__info-item-title">Выбор адреса для возврата</div>
                            <div className="rentForm__info-item-text">Вы также можете ввести адрес другого места, где мы заберем у вас велосипед. </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rentForm__bottom">
                <button 
                    type="submit" 
                    className="rentForm__button"
                    disabled={Object.values(errors)[0] ? true : false}
                >
                    Забронировать
                </button>
            </div>
        </form>
    )
}