export function equalSidesFn(){
    const equalSidesElements = document.querySelectorAll('#equalSides')
    const equalSidesElementsRev = document.querySelectorAll('#equalSidesRev')

    equalSidesElements.forEach((el: any)=>{
        el.style.height = el.offsetWidth + 'px'
    })
    equalSidesElementsRev.forEach((el: any)=>{
        const size = el.offsetHeight + 'px'

        if(el.dataset.chart){
            const parentWidth = el.closest('#chartContainer').clientWidth
            if(parentWidth*0.48 < el.offsetHeight){
                el.style.minWidth = parentWidth*0.48 + 'px'
                el.style.maxWidth = parentWidth*0.48 + 'px'
                el.style.minHeight = parentWidth*0.48 + 'px'
                el.style.maxHeight = parentWidth*0.48 + 'px'
            }else{
                el.style.minWidth = size
                el.style.maxWidth = size
            }
        }else{
            el.style.minWidth = size
            el.style.maxWidth = size
        }
    })
}