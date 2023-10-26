import { Tdispatch } from "@js/types/state/allState"
import addSelectBike from "@state/userState/requests/actions/addSelectBike";

type Tprops = {
    dispatch: Tdispatch,
    bikeId: number
    userUid: string,
    event:  React.MouseEvent<HTMLButtonElement, MouseEvent>
}
const bikeCardClick = ({dispatch, bikeId, userUid, event}: Tprops) => {
    const target = event.target as HTMLElement
    console.log(bikeId)
    if(userUid){
        dispatch(addSelectBike(bikeId))
    }else{
        const button = target.closest('button')
        button?.classList.add('err')
        setTimeout(()=>{button?.classList.remove('err')}, 400)
    }
}
export default bikeCardClick