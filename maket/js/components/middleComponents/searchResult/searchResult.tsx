import searchResultCardLines from "@componentModules/searchResultCardLines/searchResultCardLines";
import { ToutletContext } from "@js/types/outletContext";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import initQuantityCards from "./initQuantityCards/initQuantityCards";
import { useSelector } from "react-redux";
import { TactiveBikeBrand, TactiveBikeSize, TbikeRentInfo } from "@js/types/state/rentStateTypes";
import { userStateInterfase } from "@js/types/state/userStateTypes";

import Select from "@componentModules/select/select";
import { setActiveBikeBrand, setActiveBikeSize, setLocalBikeInfo } from "@js/state/rentState/rentRouter";
import { useAppDispatch } from "@js/hooks/useAppDispatch";

export default ()=>{
    const dispatch = useAppDispatch()

    const {scrollWidth}: ToutletContext = useOutletContext()
    const [quantityCards, setQuantityCards] = useState<number>(initQuantityCards(scrollWidth))

    const localBikeInfo: TbikeRentInfo | [] = useSelector((state: userStateInterfase)=> state.rentRouter.localBikeInfo)
    const activeBrand: TactiveBikeBrand = useSelector((state: userStateInterfase)=> state.rentRouter.activeBikeBrand)
    const activeSize: TactiveBikeSize = useSelector((state: userStateInterfase)=> state.rentRouter.activeBikeSize)

    return <div className="searchResult wrapper-component">
    <div className="searchResult__param-box">

        <div className="searchResult__param">
            <div className="searchResult__param-title">Бренд</div>

            <Select
                setState={{mainFn: setActiveBikeBrand, addFn: setLocalBikeInfo}}
                state={activeBrand}
                dispatch={dispatch}
                itemsList={['Все', 'Schwinn', 'Merida', 'Trek', 'Cannondale', 'Kona', 'Cube', 'Scott', 'Santa Cruz']}
                imit={true}
            />

        </div>
        
        <div className="searchResult__param">
            <div className="searchResult__param-title">Размер рамы</div>

            <Select
                setState={{mainFn: setActiveBikeSize, addFn: setLocalBikeInfo}}
                state={activeSize}
                dispatch={dispatch}
                itemsList={['Все', 'XS', 'S', 'S/M', 'M', 'L', 'XL', 'XXl']}
                imit={true}
            />

        </div>

    </div>

    {localBikeInfo[0] ?
        <>
            {searchResultCardLines(quantityCards, scrollWidth, localBikeInfo, dispatch)}
            <button onClick={(e)=>setQuantityCards(quantity=>quantity+=2)} className="searchResult__button">Далее</button>
        </>
    :''}
    </div>
}