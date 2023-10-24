import deleteOrder from "@state/userState/requests/actions/deleteOrder"
import { setDeleteOrderId } from "@state/userState/userRouter"
import { Tdispatch } from "@js/types/state/allState"

type Tprops = {
    dispatch: Tdispatch,
    type: 'toggle' | 'submit' | 'clear',
    id?: string,
}

const onClick = ({dispatch, type, id}: Tprops) => {

    if(type === 'toggle'){
        clickEvts(id || null, dispatch)
    }else if(type === 'clear'){
        clickEvts(null, dispatch)
    }else{
        dispatch(deleteOrder())
        clickEvts(null, dispatch)
    }
}
export default onClick

function clickEvts(param : string | null, dispatch: Tdispatch){
    dispatch(setDeleteOrderId(param))
    document.body.classList.toggle('backBlurActive')
}