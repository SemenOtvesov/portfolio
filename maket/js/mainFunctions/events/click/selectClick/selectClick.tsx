import { Tpoints } from "@js/types/state/calendarsTypes"

type Tprops = {
    setState: {mainFn: (a: any)=>void, addFn?: (a: any)=>void},
    dispatch?: (a: any)=>void,
    selectBikeCalendar?: Tpoints,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
}

const onClick = ({setState, dispatch, selectBikeCalendar, event}:Tprops) => {
    const target = event.target as HTMLElement

    const select: HTMLElement | null = target.closest('#select')
    const selectList = document.querySelectorAll('#select')
    const selectItem: HTMLLIElement | null = target.closest('#selectItem')
    select?.classList.toggle('active')

    if(selectItem?.getAttribute('value')){
        if(dispatch){
            const dispatchValue = selectItem.getAttribute('value')
            dispatch(setState.mainFn(dispatchValue === "По адресу" ? 'address' : 'pickup'))
            if(setState.addFn){
                dispatch(setState.addFn(selectBikeCalendar))
            }
        }else{
            setState.mainFn(selectItem.getAttribute('value'))
        }
    }

    selectList.forEach(el=>{if(el !== select){el.classList.remove('active')}})
}
export default onClick