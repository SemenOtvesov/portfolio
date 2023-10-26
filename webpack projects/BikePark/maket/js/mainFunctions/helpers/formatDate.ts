import { TonePoint } from "@js/types/state/calendarsTypes"

type Tprops = {
    initDate: string | TonePoint
}

export default ({initDate}:Tprops)=>{
    let dateParam: number[] = [0, 0, 0]
    if(typeof initDate === 'string'){
        const splitArr = initDate.split('.').map(el=>+el)
        dateParam = [...splitArr].reverse()
    }else if(initDate.year && initDate.month && initDate.day){
        dateParam = [initDate.year, initDate.month, initDate.day]
    }
    if(dateParam[0] && dateParam[1] && dateParam[2]){
        return new Date(dateParam[0], dateParam[1], dateParam[2]).getTime()
    }
}