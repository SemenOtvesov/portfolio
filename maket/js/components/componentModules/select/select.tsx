import React from "react";
import selectClick from '@events/click/selectClick/selectClick'
import { useSelector } from "react-redux";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import { Tpoints } from "@js/types/state/calendarsTypes";
type Tprops = {
    itemsList: Array<string>,
    setState: {mainFn: (a: any)=>void, addFn?: (a: any)=>void},
    state: string,
    dispatch? : (a:any)=>void,
    classPrefix?: string,
    imit?: boolean
}

export default ({classPrefix, setState, state, dispatch, imit, itemsList}:Tprops)=>{
    const selectBikeCalendar: Tpoints | [] = useSelector((state: userStateInterfase)=> state.calendarsRouter.selectBikeCalendar)

    return (
        <div 
            id="select" 
            onClick={(e)=>{
                if(dispatch){
                    selectClick({setState, dispatch, selectBikeCalendar, event: e})
                }else{
                    selectClick({setState, event: e})
                }
            }} 
            className={classPrefix ? `select-${classPrefix}-box`: `select-box`}
        >
            <button className={classPrefix ? `select-${classPrefix}-button`: `select-button`}>{state}</button>
            <div id="selectArrow" className={classPrefix ? `select-${classPrefix}-arrow`: `select-arrow`}><span /></div>   
            <ul data-select-list className={classPrefix ? `select-${classPrefix}-list`: `select-list`}>
                {imit ? <div className="select-list-imit">'</div> : ''}
                {itemsList.map((item, id)=>
                    <li 
                        id="selectItem" 
                        value={item} 
                        className={item === state ? "select-item selected" : 'select-item'}
                        key={item}
                    >
                        {item}
                    </li>
                )}
            </ul>
        </div>
        )
}