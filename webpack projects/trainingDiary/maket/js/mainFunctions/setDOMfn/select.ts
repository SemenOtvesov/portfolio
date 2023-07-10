type TbuttonSelected = undefined | (()=>void)
export function buttonSelected(selects: NodeListOf<HTMLElement>): TbuttonSelected{
    if(!selects[0]){return}
    selects.forEach(select=>{
        const selectButton: any = select.children[0]
        const selectItemsList: any = getSelectItemsList(select)
        const selectItems: any = getSelectItems(select)
    
        if(selectItemsList !== null && selectItems[0]){
            const initSelectValue: string = selectItemsList.querySelector('.selected')?.getAttribute('value')
            if(initSelectValue){selectButton.innerHTML = initSelectValue}else{
                selectItems[0].classList.add('selected')
                selectButton.innerHTML = selectItems[0].getAttribute('value')
            }
        }
    })

    let clickSelectBind = clickSelect.bind(this, selects);
    document.addEventListener('click', clickSelectBind)

    return ()=>{
        document.removeEventListener('click', clickSelectBind)
    }
}

function clickSelect(selects: NodeListOf<HTMLElement>, event: any){
    let check = 0
    selects.forEach(select=>{
        const selectButton: any = select.children[0]
        const selectItemsList: any = getSelectItemsList(select)
        const selectItems: any = getSelectItems(select)

        if(select == event.target.closest('#select')){
            if(event.target.closest('#select')){
                if(event.target.closest('#select').dataset.fixsed){
                    const list = document.getElementById('addExercisePopapInputList')
                    const rect = select.getBoundingClientRect()
                    if(!list){return}
                    list.style.cssText = `top: ${rect.top + rect.height}px; left: ${rect.left}px; width:${rect.width}px`
                    if(selectItems[0]){
                        select.classList.toggle('active')
                        list?.classList.toggle('active')
                    }
                }else{
                    select.classList.toggle('active')
                }
        
                const selectItem = event.target.closest('#selectItem')
                if(selectItem){
                    selectItems.forEach((el: HTMLElement)=>el.classList.remove('selected'))
                    selectItem.classList.add('selected')
        
                    selectButton.innerHTML = selectItem.getAttribute('value')
                }
            }
        }

        if(event.target.closest('#addExercisePopapInputList')){
            if(check++ === 0){
                const list = document.getElementById('addExercisePopapInputList')
                list?.classList.toggle('active')

                const selectItem = event.target.closest('#selectItem')
                if(selectItem){
                    selectItems.forEach((el: HTMLElement)=>el.classList.remove('selected'))
                    selectItem.classList.add('selected')
        
                    selectButton.value = selectItem.getAttribute('value')
                }
            }
        }
    })
}

function getSelectItemsList(select: HTMLElement){
    if(select.dataset.fixsed){
        if(select.dataset.selectType === "addExercisePopapInput"){
            return document.getElementById('addExercisePopapInputList')
        }
    }else{
        return select.children[1]
    }
}
function getSelectItems(select: HTMLElement){
    if(select.dataset.fixsed){
        if(select.dataset.selectType === "addExercisePopapInput"){
            return document.getElementById('addExercisePopapInputList')?.querySelectorAll('#selectItem')
        }
    }else{
        return select.querySelectorAll('#selectItem')
    }
}