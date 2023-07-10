import { numberText } from "@mainFunctions/numberText";
import { TexerciseList } from "@js/types/componentsTypes";
import React from "react";

export default(exerciseList: TexerciseList, scrollWidth: number)=>{
    if(!exerciseList){
        return <>
        <div className="main__left-warn">
            У вас пока что нет упражнений
        </div>
    </>}

    return exerciseList.map(el=>{
        return <li key={Math.random()} id="exercise" className="main__left-item">
                    <div id="exerciseName" className="main__left-item-title">{el.exerciseName}</div>
                    <div className="main__left-item-content">
                        <div className="main__left-item-content-main">
                            <div className="main__left-item-text">
                                {numberText(el.quantityApproach, ['подход', 'подхода', 'подходoв'])}
                            </div>
                            <div className="main__left-item-button-box">
                                {el.approachList ? 
                                    el.approachList[0] ? 
                                        <button id="exerciseMoreButton" className="main__left-item-button">Подробнее...</button>
                                    : '' 
                                : ''
                                }
                                <button id="exerciseAddApproach" className="main__left-item-button">Добавить подход</button>
                            </div>
                        </div>
                        
                        <div id="addApproachPopap" className="main__left-item-popap">
                            <div className="main__left-item-popap-item-input-box">
                                <div className="main__left-item-popap-item">
                                    <div className="main__left-item-popap-item-title">Вес:</div>
                                    <input placeholder="число в киллограмах" id="approachInputWeight" className="main__left-item-popap-item-input"/>
                                </div>
                                <div className="main__left-item-popap-item">
                                    <div className="main__left-item-popap-item-title">Количество повторений: </div>
                                    <input placeholder="число" id="approachInputQuantity" className="main__left-item-popap-item-input"/>
                                </div>
                            </div>
                            <div className="main__left-item-popap-item">
                                <button id="addApproachButton" className="main__left-item-popap-item-button">Добавить +</button>
                            </div>
                        </div>

                        <ul id="exerciseSublist" className="main__left-item-sublist">
                            {el.approachList?.map(approach=>{
                                return <li key={Math.random()} data-exercise-id={el.approachList?.indexOf(approach)} className="main__left-item-subitem">
                                        <div className="main__left-item-subitem-text">
                                            <span>Подход №{el.approachList ? el.approachList.indexOf(approach)+1 : ''}</span>
                                        </div>
                                        {
                                        scrollWidth > 425 
                                            ?
                                        <>
                                            <div className="main__left-item-subitem-text">Вес: {approach.weight}кг</div>
                                            <div className="main__left-item-subitem-text">Повторения: {approach.repetitions} раз</div>
                                        </>
                                            :
                                        <div className="main__left-item-subitem-text-box">
                                            <div className="main__left-item-subitem-text">Вес: {approach.weight}кг</div>
                                            <div className="main__left-item-subitem-text">Повторения: {approach.repetitions} раз</div>
                                        </div>
                                        }
                                        <div id="approachDeleteButton" className="main__left-item-subitem-close"><span></span></div>
                                    </li>
                            })}
                        </ul>
                    </div>

                    <div id="exerciseCloseButton" className="main__left-item-close"><span></span></div>
                </li>
    })
}