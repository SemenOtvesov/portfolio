import { setPaginationArray, setRerender, setTrainingRenderFrames } from "@js/types/functionTypes"
import { MouseEvent } from "react"

export default (setTrainingRenderFrames: setTrainingRenderFrames, setPaginationArray: setPaginationArray, setRerender: setRerender, event: MouseEvent)=>{
    const target: any = event.target

    if(target.closest('[data-pagination-key]')){
        const pagination:HTMLLIElement = target.closest('[data-pagination-key]')

        if(!pagination){return}
        if(!pagination.dataset.paginationKey){return}
        const paginationKey:number = +pagination.dataset.paginationKey || 1
        const paginationNext: boolean = !!pagination.dataset.paginationNext || false
        const paginationLast: boolean = !!pagination.dataset.paginationLast || false
        
        if(paginationNext){
            setPaginationArray((paginationArray: number[])=>{
                paginationArray.shift();
                return paginationArray
            })
        }
        if(paginationLast){
            setPaginationArray((paginationArray: number[])=>{
                paginationArray.unshift(paginationArray[0] - 10)
                return paginationArray
            })
        }
        if(paginationLast || paginationNext){return setRerender(Math.random())}
        setTrainingRenderFrames({start: (paginationKey-1)*10, end: paginationKey*10})
    }
}