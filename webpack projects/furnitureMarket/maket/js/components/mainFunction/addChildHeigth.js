export function addChildHeight(){
    const parents = document.querySelectorAll('[data-parent-height]')

    parents.forEach(el=>{
        if(el.querySelectorAll('[data-child-height]')){
            const padding = +el.dataset.padding
            el.querySelectorAll('[data-child-height]').forEach(child=>{
                child.style.height = el.clientHeight - (padding ? padding*2 : 0) + 'px'
            })
        }
    })
}