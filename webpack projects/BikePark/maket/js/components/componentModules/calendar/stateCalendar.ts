import { Tpoints } from "@js/types/state/calendarsTypes"

export default function stateCalendar(endPoints: Tpoints, calendarYear:number, calendarMonth: number, number: number, numberEl:HTMLDivElement){
    const pointStartYear = endPoints.startPoint.year
    const pointFinishYear = endPoints.endPoint.year
    
    if(!pointStartYear){return}
    if(calendarYear === pointStartYear){
        if(calendarMonth === endPoints.startPoint.month){
            if(number === endPoints.startPoint.day){
                numberEl.classList.add('active')
            }
        }
    }

    if(!pointFinishYear){return}
    if(calendarYear === pointFinishYear){
        if(calendarMonth === endPoints.endPoint.month){
            if(number === endPoints.endPoint.day){
                numberEl.classList.add('active')
            }
        }
    }
    if(calendarYear >= pointStartYear && calendarYear <= pointFinishYear){
        const pointStartMonth = endPoints.startPoint.month;
        const pointFinishMonth = endPoints.endPoint.month;

        const pointStartDay = endPoints.startPoint.day
        const pointFinishDay = endPoints.endPoint.day

        if(pointStartMonth === undefined){return}; if(pointFinishMonth === undefined){return};

        if(pointStartYear < pointFinishYear){
            if(!pointStartDay){return}; if(!pointFinishDay){return};
            if(calendarYear < pointFinishYear){
                if(calendarMonth === pointStartMonth && number > pointStartDay){
                    numberEl.classList.add('jumper')
                }
                if(calendarMonth > pointStartMonth){
                    numberEl.classList.add('jumper')
                }
            }

            if(calendarYear === pointFinishYear){
                if(calendarMonth < pointFinishMonth){
                    numberEl.classList.add('jumper')
                }
                if(calendarMonth === pointFinishMonth && number < pointFinishDay){
                    numberEl.classList.add('jumper')
                }
            }
        }
        if(pointStartYear === pointFinishYear){
            if(calendarMonth >= pointStartMonth && calendarMonth <= pointFinishMonth){
                if(!pointStartDay){return}; if(!pointFinishDay){return};
                if(pointStartMonth === pointFinishMonth){
                    if(number > pointStartDay && number < pointFinishDay){
                        numberEl.classList.add('jumper')
                    }
                }else{
                    
                    if(calendarMonth === pointStartMonth){
                        if(number > pointStartDay){numberEl.classList.add('jumper')}
                    }else{
                        if(calendarMonth < pointFinishMonth){
                            numberEl.classList.add('jumper')
                        }else if(number < pointFinishDay){
                            numberEl.classList.add('jumper')
                        }
                    }
                }
    
                if(number > pointStartDay && number < pointFinishDay){
                    numberEl.classList.add('jumper')
                }
            }
        }
    }
}