import selectClick from "@js/mainFunctions/events/click/selectClick/selectClick";
import selectItemClick from "@js/mainFunctions/events/click/selectItemClick/selectItemClick";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { HTMLAttributes } from "react";
import { useDispatch } from "react-redux";

interface Tprops extends HTMLAttributes<HTMLDivElement> {
    itemsList: Array<string>,
    setState: {mainFn: ActionCreatorWithPayload<any>, addFn?: ActionCreatorWithPayload<any>},
    state: string,
    comparisonState: {[a: string]: string}
    classPrefix?: string,
    imit?: boolean
}
export default ({setState, state, imit, itemsList, classPrefix, comparisonState, ...props}:Tprops)=>{
    const dispatch = useDispatch()
    return (
        <div 
            id="select" 
            onClick={selectClick} 
            {...props}
            className={
                classPrefix 
                    ?
                `select-${classPrefix}-box ${props.className ? props.className : ''}`
                    :
                `select-box ${props.className ? props.className : ''}`
            }
        >
            <button className={classPrefix ? `select-${classPrefix}-button`: `select-button`}>{comparisonState[state]}</button>
            <div id="selectArrow" className={classPrefix ? `select-${classPrefix}-arrow`: `select-arrow`}><span /></div> 
            
            <ul data-select-list className={classPrefix ? `select-${classPrefix}-list`: `select-list`}>
                {imit ? <div className="select-list-imit">'</div> : ''}
                {itemsList.map((item)=>
                    <li 
                        id="selectItem" 
                        value={item}
                        className={item === comparisonState[state] ? "select-item selected" : 'select-item'}
                        key={item}
                        onClick={(e)=>selectItemClick({dispatch, setState: setState.mainFn, comparisonState, item, e})}
                    >
                        {item}
                    </li>
                )}
            </ul>
        </div>
        )
}