import { setActiveTypeRentDate } from "@state/calendarsState/calendarsRouter" 

type Tprops = {
    dispatch: (a:any)=>void
    event: React.SyntheticEvent<Element, Event>
}

const onClick = ({dispatch, event}: Tprops) => {
    const target = event.target as HTMLElement

    if(target.closest('#typeRentButton')){
        const button: HTMLElement | null = target.closest('#typeRentButton')
        const buttons = document.querySelectorAll('#typeRentButton')
        const rentType = button?.dataset.rentType
        const rentTypeValid: 'day' | 'hour' | undefined = rentType === 'day' || rentType === 'hour' ? rentType : undefined 
        if(!rentTypeValid){return}
        dispatch(setActiveTypeRentDate(rentTypeValid))
    }
}
export default onClick