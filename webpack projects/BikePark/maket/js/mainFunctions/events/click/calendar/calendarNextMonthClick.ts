type Tcurrent = {currYear:number, currMonth:number}
type TsetCurrent = (a: ((current: Tcurrent)=>Tcurrent) | Tcurrent)=>void

const calendarNextMonthClick = (setCurrent: TsetCurrent) => {
    setCurrent(curent=>{
        if(curent.currMonth !== 11){
            return {currYear: curent.currYear, currMonth: curent.currMonth+1}
        }else{
            return {currYear: curent.currYear + 1, currMonth: 0}
        }
    })
}
export default calendarNextMonthClick