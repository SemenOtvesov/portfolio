import { ExelComponetn } from "@core/ExelComponetn"
import { createStore } from "@core/createStore";
import { rootReduser } from '@maket/rootReduser/rootReduser'

export class TableSection {
    constructor(table){
        this.sections = []
        this.oldElem = null
        this.table = table
        this.createStore = createStore(rootReduser)
        this.createStore.subscribe(state=>localStorage.setItem('state', JSON.stringify(state)))
    }

    select($el, excelId){
        const input =  this.table.querySelector('#fxInput')
        if($el.dataset.content){
            input.value = $el.dataset.content
        }else{input.value = $el.firstElementChild.value}
        
        this.sections.forEach(el=>el.classList.remove('selected'))
        this.sections = []

        if(!this.sections.find(el=>el === $el)){
            this.sections.push($el)
        }

        $el.classList.add('selected')
        $el.firstElementChild.focus()

        const mainState = JSON.parse(localStorage.getItem('state')) || {}
        let state = mainState
        if(state.hasOwnProperty(excelId)){state = state[excelId]}

        const editButtons = document.querySelectorAll('[data-edit]')
        editButtons.forEach(el=>el.classList.remove('active'))

        if(state.hasOwnProperty('exStateEdit')){
            const stateSelectEl = state.exStateEdit.find(el=>$el.dataset.id === el.exId)
            if(stateSelectEl){
                for(const key in stateSelectEl){
                    editButtons.forEach(el=>{
                        if(el.dataset.edit === stateSelectEl[key]){el.classList.add('active')}
                    })
                }
            }
        }

        this.createStore.dispatch(mainState, {type:'resSelectEl', data:$el.dataset.id}, excelId)

        this.oldElem = $el
    }

    selectGroup($el, table){
        this.sections.forEach(el=>el.classList.remove('selected'))

        let [gapStartCol, gapStartRow] = this.oldElem.dataset.id.split(":")
        let [gapEndCol, gapEndRow] = $el.dataset.id.split(":")


        if(+gapStartCol > +gapEndCol){
            let variable = gapStartCol;
            gapStartCol = gapEndCol;
            gapEndCol = variable
        }
        if(+gapStartRow> +gapEndRow){
            let variable = gapStartRow;
            gapStartRow = gapEndRow;
            gapEndRow = variable
        }

        const $sections = table.querySelectorAll('[data-id]')
        $sections.forEach(el=>{
            const [elCol, elRow] = el.dataset.id.split(':')
            if((+elCol >= +gapStartCol)&&(+elCol <= +gapEndCol)){
                if((+elRow >= +gapStartRow)&&(+elRow <= +gapEndRow)){
                    el.classList.add('selected')
                    if(this.sections.find(element=>element.dataset.id !== el.dataset.id)){
                        this.sections.push(el)
                    }
                }
            }
        })
        this.oldElem = $el
    }

    selected(){
        return this.sections
    }
}