import {ExelComponetn} from '@core/ExelComponetn.js'
export class Editing extends ExelComponetn{
    static class = ['main__editing-box']

    constructor(el, emit, store, excelId){
        super(el, {
            name: 'table', 
            listeners: ['click'],
            emitter: emit,
            store,
            excelId
        })
    }
    toHTML(){
        return `
    <div data-edit="left" class="main__editing-item">
        <img src="./icon/align-left.png" alt="">
    </div>
    <div data-edit="center" class="main__editing-item">
        <img src="./icon/align-center.png" alt="">
    </div>
    <div data-edit="right" class="main__editing-item">
        <img src="./icon/align-right.png" alt="">
    </div>
    <div data-edit="bold" class="main__editing-item">
        <img src="./icon/bold.png" alt="">
    </div>
    <div data-edit="italic" class="main__editing-item">
        <img src="./icon/italic.png" alt="">
    </div>
    <div data-edit="underLine" class="main__editing-item">
        <img src="./icon/underline.png" alt="">
    </div>
    `
    }

    onClick(event){
        const target = event.target;
        const parentTarget = target.parentElement

        if(parentTarget.dataset.edit){
            let state = JSON.parse(localStorage.getItem('state')) || {}
            if(this.excelId){state = state[this.excelId]}
            const $exElems = document.querySelectorAll('.selected')

            const edit = parentTarget.dataset.edit

            const exs = [], delExs = []
            $exElems.forEach(el=>{
                if((edit==='left')||(edit==='center')||(edit==='right')){
                    exs.push({exId: el.dataset.id, posType: edit})
                    delExs.push({exId: el.dataset.id, deleteElement: parentTarget.dataset.edit+'Type'})
                }
                if(edit === 'bold'){
                    exs.push({exId: el.dataset.id, boldType: edit})
                    delExs.push({exId: el.dataset.id, deleteElement: parentTarget.dataset.edit+'Type'})
                }
                if(edit === 'italic'){
                    exs.push({exId: el.dataset.id, italicType: edit})
                    delExs.push({exId: el.dataset.id, deleteElement: parentTarget.dataset.edit+'Type'})
                }
                if(edit === 'underLine'){
                    exs.push({exId: el.dataset.id, underLineType: edit})
                    delExs.push({exId: el.dataset.id, deleteElement: parentTarget.dataset.edit+'Type'})
                }
            })
            
            if(state.exStateEdit){
                this.$emit('editDel', parentTarget.dataset.edit)
                const delBol = state.exStateEdit.reduce((item,elem) => {
                    const delEl = delExs.find(delEl=>(delEl.exId === elem.exId)&&(elem[delEl.deleteElement]))
                    if(delEl){return item = true}
                    return item
                }, false)
                if(delBol){
                    this.dispatch({type:'deleteEditEl', data:delExs})
                }else{
                    this.$emit('edit', parentTarget.dataset.edit)
                    if((edit==='left')||(edit==='center')||(edit==='right')){
                        this.dispatch({type:'exStateEdit', data:exs})
                        const editButtons = document.querySelectorAll('[data-edit]')
                        editButtons.forEach(el=>{
                            const elEdit = el.dataset.edit
                            if((elEdit==='left')||(elEdit==='center')||(elEdit==='right')){el.classList.remove('active')}
                        })
                        parentTarget.classList.add('active')
                    }else{
                        this.dispatch({type:'exStateEdit', data:exs})
                        parentTarget.classList.toggle('active')
                    }
                }
            }else{
                this.$emit('edit', parentTarget.dataset.edit)
                this.dispatch({type:'exStateEdit', data:exs})
                parentTarget.classList.toggle('active')
            }
        }
    }
}