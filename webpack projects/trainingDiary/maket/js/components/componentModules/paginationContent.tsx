import { ItraningList } from "@js/types/componentsTypes"
import { setPaginationArray } from "@js/types/functionTypes"
import React from "react"

export default (trainingList: ItraningList, paginationArray: number[], setPaginationArray: setPaginationArray)=>{
    const arrayGen = trainingList.reduce((acc: number[], training, index)=>{
        if(index % 10 === 0 && index != 0){
            acc.push(index)
        }
        return acc
    }, [])
    
    if(!paginationArray[0] || arrayGen[arrayGen.length - 1] != paginationArray[paginationArray.length - 1]){
        setPaginationArray(arrayGen)
    }
    const array = paginationArray

    return array.map(index=>{
        const clientIndex = ~~(index/10)
        const startValue = ~~(array.slice(6, 7)[0] / 10)

        if(~~(array[0] / 10) !== 1){
            if(index === array[0]){
                return <li 
                        key={'...' + 'paginationKey' + Math.random()}
                        data-pagination-last
                        data-pagination-key={clientIndex-1} 
                            >
                                ...
                        </li>
            }else{

                if(clientIndex < startValue || clientIndex === ~~(array[array.length-1] / 10) ){
                    return <li data-pagination-key={clientIndex-1} key={index + 'paginationKey' + Math.random()}>{clientIndex-1}</li>
                }
                if(clientIndex === 10){
                    return <li 
                                key={'...' + 'paginationKey' + Math.random()}
                                data-pagination-next
                                data-pagination-key={clientIndex-1} 
                            >
                                ...
                            </li>
                }
            }

        }else if(array.length > 9){
            if(clientIndex < startValue){
                return <li data-pagination-key={clientIndex} key={index + 'paginationKey'}>{clientIndex}</li>
            }
            if(clientIndex === ~~(array[array.length-1] / 10)){
                return <li data-pagination-key={clientIndex} key={index + 'paginationKey'}>{clientIndex - 1}</li>
            }
            if(clientIndex === ~~(array[array.length-1] / 10) - 1){
                return <li 
                            key={'...' + 'paginationKey' + Math.random()}
                            data-pagination-next
                            data-pagination-key={clientIndex-1} 
                        >
                            ...
                        </li>
            }
        }else{
            return  <li data-pagination-key={clientIndex} key={index + 'paginationKey' + Math.random()}>{clientIndex}</li>
        }
    })
}