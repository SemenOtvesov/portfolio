import Select from "@js/components/componentModules/select/select";
import { setActiveTypeRentPlase } from "@js/state/calendarsState/calendarsRouter";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default ()=>{
    const dispatch = useDispatch()
    const activeTypeRentPlase = useSelector((state: userStateInterfase)=>state.calendarsRouter.activeTypeRentPlase)
    return (
        <div className="main__preview-bottom-card">
            <div className="main__preview-bottom-card-title">Доставка</div>

            <Select
                setState={{mainFn: setActiveTypeRentPlase}}
                state={activeTypeRentPlase === 'address' ? 'По адресу' : 'Самовывоз'}
                dispatch={dispatch}
                itemsList={['По адресу', 'Самовывоз']}
                imit={true}
            />

        </div>
    )
}