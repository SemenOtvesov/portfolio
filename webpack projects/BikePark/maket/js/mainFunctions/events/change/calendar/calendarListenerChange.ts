import { setTimeStart } from "@js/state/calendarsState/calendarsRouter";
import { Tdispatch } from "@js/types/state/allState";


export default (dispatch: Tdispatch, event: any)=>{
    const target: any = event.target

    const input: HTMLInputElement = target.closest('#startTimeInput');
    const [hour = '', min = ''] = input.value.split(':')
    const retTime = {hour, min}

    if(hour && !isNaN(+hour)){
        if(hour.length > 2){
            retTime.hour = hour[0] + hour[1]; retTime.min = hour[2]
        }else if(+hour > 23){retTime.hour = '23'}

        if(+hour < 10 && hour.length === 1 && +hour > 2){retTime.hour = `0${hour}`}
    }else{retTime.hour = '12'; warning(input)}

    if(!isNaN(+min)){
        if(+min > 59){retTime.min = '59'}
    }else{retTime.min = '00'; warning(input)}

    if(hour){
        if(input.value.length >= 3){
            dispatch(setTimeStart(`${retTime.hour}:${retTime.min}`))
        }else{dispatch(setTimeStart(`${retTime.hour}`))}
    }else{return dispatch(setTimeStart(''))}
}

function warning(input: HTMLInputElement){
    input.classList.add('warning')
    setTimeout(()=>input.classList.remove('warning'), 300)
}