export function setHeightChildrenInBody(){
    const header = document.getElementById('header')
    const childrensInBody = document.querySelectorAll('#childrensInBody')

    childrensInBody.forEach((el: any)=>{
        el.style.height = window.innerHeight - (header?.offsetHeight || 0)  + 'px'
    })
}