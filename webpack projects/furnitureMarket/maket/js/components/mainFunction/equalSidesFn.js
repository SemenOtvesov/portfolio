export function equalSidesFn(){
    const equalSidesElements = document.querySelectorAll('#equalSides')
    const equalSidesElementsRev = document.querySelectorAll('#equalSidesRev')

    equalSidesElements.forEach(el=>{
        el.style.height = el.offsetWidth + 'px'
    })
    equalSidesElementsRev.forEach(el=>{
        const size = el.offsetHeight + 'px'
        el.style.minWidth = size
        el.style.maxWidth = size
    })
}