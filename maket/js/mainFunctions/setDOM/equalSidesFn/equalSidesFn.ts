export function equalSidesFn(){
    const equalSidesElements = document.querySelectorAll('#equalSides')
    const equalSidesElementsRev = document.querySelectorAll('#equalSidesRev')
    const aspectSidesEvements: NodeListOf<HTMLElement> = document.querySelectorAll('#aspectSides')
    const aspectSidesRevEvements: NodeListOf<HTMLElement> = document.querySelectorAll('#aspectSidesRev')

    equalSidesElements.forEach((el: any)=>{
        el.style.height = el.offsetWidth + 'px'
    })
    equalSidesElementsRev.forEach((el: any)=>{
        const size = el.offsetHeight + 'px'

        el.style.minWidth = size
        el.style.maxWidth = size
    })

    aspectSidesEvements.forEach(el=>{
        const aspect:number = el.dataset.aspect ? +el.dataset.aspect : NaN
        
        const size = el.offsetHeight * aspect + 'px'

        el.style.maxWidth = size
        el.style.width = size
    })

    aspectSidesRevEvements.forEach(el=>{
        const aspect:number = el.dataset.aspect ? +el.dataset.aspect : NaN
        
        const size = el.offsetWidth * aspect + 'px'

        el.style.height = size
    })
}