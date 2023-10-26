export default function(){
    const setChildren: NodeListOf<HTMLElement> = document.querySelectorAll('#setHeightChildren, [data-set-height-children]')
    setChildren.forEach(el=>{
        const newHeight = el.parentElement?.offsetHeight
        el.style.height = newHeight + 'px'
    })
}