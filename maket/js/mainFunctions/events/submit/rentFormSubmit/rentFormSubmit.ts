import createOrder from "@js/state/userState/async/actions/createOrder"
import { TcreateOrder, Torder } from "@js/types/orderType"
import { Tdispatch } from "@js/types/state/allState"
import { Tpoints, TtypeRentDate, TtypeRentPlase } from "@js/types/state/calendarsTypes"
import { TbikeRentCard } from "@js/types/state/rentStateTypes"
import { TselectBikeList } from "@js/types/state/userStateTypes"
import { TrentForm } from "@middleComponents/rent/rentForm/rentFormGeneric"
import { NavigateFunction } from "react-router-dom"

type Tprops = {
    data: TrentForm
    navigate: NavigateFunction,
    bikeList: TbikeRentCard[],
    selectBikeList: TselectBikeList | undefined,
    dispatch: Tdispatch,
    dateInfo: {
        timeStart: string, 
        activeTypeRentDate: TtypeRentDate, 
        activeTypeRentPlase: TtypeRentPlase, 
        points: Tpoints
    },
    prise: number,
}
const rentFormSubmit = ({data, navigate, selectBikeList, bikeList, dispatch, dateInfo, prise}: Tprops) => {
    navigate('/rentComplete', {
        state: {
            bikeList
        }
    })
    const orderObj: TcreateOrder = {
        points: dateInfo.points,
        typeRentDate: dateInfo.activeTypeRentDate,
        typeRentPlase: dateInfo.activeTypeRentPlase,
        typePayment: data.payment,
        bikeRentList: selectBikeList || [],
        prise,
        deliveryState: 'processing',
        paidState: 'unpaid',
        user: {
            startAdres: data.startAdresInput,
            finAdres: data.finAdresInput,
            nameUser: data.nameInput,
            tel: data.telInput
        }
    }
    dispatch(createOrder(orderObj))
}
export default rentFormSubmit