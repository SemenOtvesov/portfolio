import React from "react";

export default function createNumbers(year: number, month: number){
    let lastDayOfLastMonth = month == 0 ? new Date(year-1, 11, 0).getDate() : new Date(year, month, 0).getDate();
    let lastDateOfMonth =  new Date(year, month+1, 0).getDate()

    const retObj = []
    let dayIterator = 1; let nextMonthIterator = 1;
    let dow = new Date(year, month, 1).getDay()

    for (let index = 0; index < 6; index++) {
        const numbers:any[] = []
        let it = 1
        for (let i = 0; i < 7; i++) {
            if(dayIterator <= lastDateOfMonth){
                if(dow === 1){
                    numbers.push(<li 
                        data-number={dayIterator} 
                        data-month={month}
                        data-year={year}
                        id="number" key={Math.random()} 
                        className="calendar__item-bottom-number"
                    >
                                    {dayIterator++}
                                </li>)
                }else if(dayIterator <= dow ){
                    numbers.push(
                        <li 
                            id="number" 
                            data-number={lastDayOfLastMonth - (--dow -dayIterator)} 
                            data-month={month === 0 ? 11 : month-1}
                            data-year={month === 0 ? year - 1 : year}
                            key={Math.random()}
                            className="calendar__item-bottom-number last-month"
                        >
                            {lastDayOfLastMonth - (dow -dayIterator)}
                        </li>
                    )
                }else if(dow === 0){
                    numbers.push(
                        <li 
                            id="number" 
                            data-number={lastDayOfLastMonth - (6 - it)} 
                            data-month={month === 0 ? 11 : month-1}
                            data-year={month === 0 ? year - 1 : year}
                            key={Math.random()} 
                            className="calendar__item-bottom-number last-month"
                        >
                            {lastDayOfLastMonth - (6 - it++)}
                        </li>
                    )
                    if(it === 7){dow++}
                }
            }else{
                numbers.push(
                    <li 
                        id="number" 
                        data-number={nextMonthIterator} 
                        data-month={month === 11 ? 0 : month+1}
                        data-year={month === 11 ? year + 1 : year}
                        key={Math.random()} 
                        className="calendar__item-bottom-number last-month"
                    >
                        {nextMonthIterator++}
                    </li>
                )
            }
        }
        retObj.push(<ul key={Math.random()} className="calendar__item-bottom-line">
                        {numbers}
                    </ul>)
    }

    return retObj
}