import Select from "@js/components/componentModules/select/select";
import { comparisonStateRent, setActiveTypeRentPlase } from "@js/state/calendarsState/calendarsRouter";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import React from "react";
import { useSelector } from "react-redux";

export default ()=>{
    const activeTypeRentPlase = useSelector((state: userStateInterfase)=>state.calendarsRouter.activeTypeRentPlase)
    return (
        <div className="main__preview-bottom-card">
            <div className="main__preview-bottom-card-title">Доставка</div>

            <Select
                setState={{mainFn: setActiveTypeRentPlase}}
                state={activeTypeRentPlase}
                itemsList={['По адресу', 'Самовывоз']}
                imit={true}
                comparisonState={comparisonStateRent}
                className="wide"
            />

        </div>
    )
}