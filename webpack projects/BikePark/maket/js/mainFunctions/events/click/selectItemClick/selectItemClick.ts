import { Tdispatch } from "@js/types/state/allState"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

type Tprops = {
    dispatch: Tdispatch, 
    setState: ActionCreatorWithPayload<any>,
    comparisonState: {[a: string]: string},
    item: string,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
}
const selectItemClick = ({dispatch, setState, comparisonState, item, e}: Tprops) => {
    const target = e.target as HTMLElement
    dispatch(setState(getKeyByValue(comparisonState, item)))

    target.closest('#select')?.classList.remove('active')
}
export default selectItemClick

function getKeyByValue(object: object, value: any) {
    const keyIndex = Object.values(object).indexOf(value)
    return Object.keys(object)[keyIndex]
}