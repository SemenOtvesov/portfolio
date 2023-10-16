type Tcurrent = {currYear:number, currMonth:number}
type TsetCurrent = (a: ((current: Tcurrent)=>Tcurrent) | Tcurrent)=>void

const calendarLastMonthClick = (setCurrent: TsetCurrent) => {
    setCurrent(curent=>{
        if(curent.currMonth !== 0){
            return {currYear: curent.currYear, currMonth: curent.currMonth-1}
        }else{
            return {currYear: curent.currYear - 1, currMonth: 11}
        }
    })
}
export default calendarLastMonthClick