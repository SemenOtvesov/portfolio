import {ExelComponetn} from '@core/ExelComponetn.js'
import { $ } from '@core/Dom.js'
import { debounce } from '@core/utils'
import { TableSection } from './TableSection'
export class Table extends ExelComponetn{
    static class = ['main__fx-table', 'table']
    constructor(el, emit, store, excelId){
        super(el, {
            name: 'table', 
            listeners: ['mousedown', 'mouseup', 'keydown', 'input'],
            emitter: emit,
            store, 
            excelId  
        })
    }

    toHTML(quantityRows = 20, quantityCol = 45){
        this.$el.setAttribute('data-elem', 'table')
        const engAlp = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
        let stringCol = ''

        let resizeStorage = JSON.parse(localStorage.getItem('state')) || {}
        if(resizeStorage.hasOwnProperty(this.excelId)){resizeStorage = resizeStorage[this.excelId]}
        for(let i = 1; i< quantityCol; i++){
            let alpI = i; if(i > 26){alpI = i-26};

            let resizeColWidth
            if((resizeStorage)&&(resizeStorage.hasOwnProperty('colResize'))){
                resizeStorage.colResize.forEach(el=>{
                    if(+el.numCol === i){
                        resizeColWidth = el.widthCol
                    }
                })
            }

            stringCol = `${stringCol}
            <div ${`style= "flex: 0 0 ${resizeColWidth || 93}px"`} data-col="${i}" 
            class="table__row-title copy-none">${engAlp[alpI - 1]}
                <div class="table__column-separator" ${resizeColWidth ? `style="left: ${resizeColWidth-8}px"`: ''}>
                    <div data-resize="column" class="separator-line__column"></div>
                </div>
            </div>`
        }
        return `
        <div class="table__fx-box">
            <div class="table__fx-title copy-none">fx</div>
            <input type="text" class="table__fx-input" id="fxInput">
        </div>
            <div class="table__fx-box">
            <div class="table__fx-title copy-none"></div>
            <div id="maxRow" class="table__row-box">
            ${stringCol}
            </div>
        </div>${this.createRows(quantityRows, quantityCol)}
        `
    }

    createRows(quantityRows, quantityCol){
        let stringRow = '' 
        let resizeStorage = JSON.parse(localStorage.getItem('state')) || {}
        if(resizeStorage.hasOwnProperty(this.excelId)){resizeStorage = resizeStorage[this.excelId]}

        const stringCol = (indexRow)=>{
            let string = ''
            
            for(let i = 0; i< quantityCol; i++){
                let resizeColWidth
                let exContent, exInputContent
                let exEditPos, exEditBold, exEditCursive, exEditUnderline;

                if(resizeStorage){
                    if(resizeStorage.hasOwnProperty('colResize')){
                        resizeStorage.colResize.forEach(el=>{
                            if(+el.numCol-1 === i){
                                resizeColWidth = el.widthCol
                            }
                        })
                    }
                    if(resizeStorage.hasOwnProperty('exStateValue')){
                        resizeStorage.exStateValue.forEach(el=>{
                            if(el.exId === `${indexRow+1}:${i+1}`){
                                exContent = el.value
                                exInputContent = el.inputValue
                            }
                        })
                    }
                    if(resizeStorage.hasOwnProperty('exStateEdit')){
                        resizeStorage.exStateEdit.forEach(el=>{
                            if(el.exId === `${indexRow+1}:${i+1}`){
                                exEditPos = el.posType
                                exEditBold = el.boldType
                                exEditCursive = el.italicType
                                exEditUnderline = el.underLineType
                            }
                        })
                    }
                }

                string = `${string} <div data-col="${i+1}" data-id="${indexRow+1}:${i+1}" 
                class="table__row-item" style="flex: 0 0 ${resizeColWidth || 93}px" ${exInputContent ? 
                    `data-content="${exInputContent}"` : ''}> 
                <textarea  id="textarea" 
                class="table__row-textarea ${exEditPos || exEditBold || exEditCursive || exEditUnderline ? `${exEditPos || ''
            } ${exEditBold || ''} ${exEditCursive || ''} ${exEditUnderline || ''}`: ''}"
                >${exContent||''}</textarea></div>`
            }
            return string

        }
        for(let i = 0; i<quantityRows; i++){
            let resizeRowWidth
            if((resizeStorage)&&(resizeStorage.hasOwnProperty('rowResize'))){
                resizeStorage.rowResize.forEach(el=>{
                    if(+el.numRow-1 === i){
                        resizeRowWidth = el.widthRow
                    }
                })
            }
            const $element = `<div class="table__fx-box" style="height: ${resizeRowWidth || 52}px">
            <div data-row="${i+1}" class="table__fx-title copy-none"">${i + 1}
                <div class="table__row-separator" style="top: ${resizeRowWidth-8}px">
                    <div class="separator-line__row"></div>
                </div>
            </div>
            <div class="table__row-box">
                ${stringCol(i)}
            </div>
            </div>`
            stringRow = `${stringRow} ${$element}`
        }
        return stringRow
    }

    moveX(target){
        const startpos = Math.round(target.parentElement.getBoundingClientRect().left);

        let positionSeparator = event.pageX - startpos
        if(positionSeparator<40){positionSeparator = 40}
        target.style.cssText = `left: ${positionSeparator-4 +'px'}`

        this.SeparatorX = target
        this.widthSeparatorX = positionSeparator
    }

    moveY(target){
        const startpos = Math.round(target.parentElement.getBoundingClientRect().top);

        let positionSeparator = event.pageY - startpos
        if(positionSeparator<40){positionSeparator = 40}
        target.style.cssText = `top: ${positionSeparator-4 +'px'}`

        this.SeparatorY = target
        this.widthSeparatorY = positionSeparator
    }

    onMousedown(){
        const target = event.target

        if(target.className === 'table__column-separator'){
            this.removeFunctionTableX = this.moveX.bind(this, event.target)
            document.addEventListener('mousemove', this.removeFunctionTableX)
        }

        if(target.className === 'table__row-separator'){
            this.removeFunctionTableY = this.moveY.bind(this, target)
            document.addEventListener('mousemove', this.removeFunctionTableY)
        }


        if((event.ctrlKey)&&(target.dataset.id)){
            this.Sections.selectGroup(target, this.$el)
        }else if((event.ctrlKey)&&(target.parentElement.dataset.id)){
            this.Sections.selectGroup(target.parentElement, this.$el)
        }else if(target.dataset.id){
            this.Sections.select(target, this.excelId)
        }else if(target.parentElement.dataset.id){
            this.Sections.select(target.parentElement, this.excelId)
        }
    }

    onMouseup(){
        if(this.widthSeparatorX){
            const numCol = this.SeparatorX.parentElement.dataset.col;
            const widthCol = this.widthSeparatorX;

            const colList = this.$el.querySelectorAll(`[data-col="${numCol}"`) 
            colList.forEach(el=>{el.style.cssText = `flex: 0 0 ${this.widthSeparatorX+4+'px'}`})
            if(widthCol === 40){
                this.SeparatorX.style.cssText = 'left: 86%'
            }

            this.dispatch({type:'colResize', data:{numCol, widthCol}})
        }
        if(this.widthSeparatorY){
            const widthRow = this.widthSeparatorY;
            const numRow = this.SeparatorY.parentElement.dataset.row;

            this.SeparatorY.parentElement.style.cssText = `height: ${this.widthSeparatorY+'px'}`
            this.SeparatorY.parentElement.parentElement.style.cssText = `height: ${this.widthSeparatorY+2+'px'}`
            this.SeparatorY.style.cssText = `top: ${this.SeparatorY.style.top.replace('px', '')-2+ 'px'}`
            if(widthRow === 40){
                this.SeparatorY.style.cssText = 'top: 80%'
            }

            this.dispatch({type:'rowResize', data:{numRow, widthRow}})
        }

        document.removeEventListener('mousemove', this.removeFunctionTableX)
        document.removeEventListener('mousemove', this.removeFunctionTableY)
    }

    #keydownFn(cells, {paramRow, paramCol}){
        let [row, col] = event.target.parentElement.dataset.id.split(':');

        cells.forEach(el=>{
            if(el.dataset.id === `${+row + paramRow}:${+col + paramCol}`){
                this.Sections.select(el, this.excelId)
            }
        })
    }

    onKeydown(event){
        const target = event.target;
        const cells = this.$el.querySelectorAll('[data-id]')

        if((target.dataset.id)||(target.parentElement.dataset.id)){
            if(event.code === 'Tab'){
                event.preventDefault()
                this.Sections.select(event.target.parentElement.nextElementSibling, this.excelId)
            }
    
            if((event.code === 'Enter')&&(!event.shiftKey)){this.#keydownFn(cells, {paramRow:1, paramCol: 0})}
            
            if((event.code === 'ArrowUp')&&(!event.shiftKey)){this.#keydownFn(cells, {paramRow:-1, paramCol: 0})}
            if((event.code === 'ArrowDown')&&(!event.shiftKey)){this.#keydownFn(cells, {paramRow:1, paramCol: 0})}
            if((event.code === 'ArrowLeft')&&(!event.shiftKey)){this.#keydownFn(cells, {paramRow:0, paramCol: -1})}
            if((event.code === 'ArrowRight')&&(!event.shiftKey)){this.#keydownFn(cells, {paramRow:0, paramCol: 1})}
        }

        if((event.code === 'Enter')&&(target.id === 'fxInput')){
            event.preventDefault()
            this.Sections.selected()[0].firstElementChild.focus()
        }
    }

    onInput(event){
        if(event.target.id === 'fxInput'){
            const exs = []
            this.$emit('fxInput', event.target.value)
            this.Sections.selected().forEach(el=>{
                el.dataset.content = event.target.value
                exs.push({exId: el.dataset.id,value: event.target.value})
            })
            this.dispatch({type:'exStateValue', data:exs})
        }
        if(event.target.id === 'textarea'){
            let value = event.target.value
            const exId = event.target.parentElement.dataset.id
            
            this.$emit('textareaInput', value)

            this.dispatch({type:'exStateValue', data:[{exId, value}]})
        }
    }

    prepare(){
        this.Sections = new TableSection(this.$el)
    }

    init(){
        super.init()

        const state = JSON.parse(localStorage.getItem('state')) || {}
        let ex
        if(state.resSelectEl){ex = state.resSelectEl}else{ex = '1:1'}
        let section = this.$el.querySelector(`[data-id="${ex}"]`)
        this.Sections.select(section, this.excelId)

        this.$on('fxInput', (el)=>this.Sections.selected().forEach(selectEl=>{
            if(el[0] === '='){
                const fn = el.slice(1)
                const rez = eval(fn)
                if(rez){selectEl.firstElementChild.value = rez}
            }else{selectEl.firstElementChild.value = el}
        }))
        this.$on('textareaInput', (el)=>this.$el.querySelector('#fxInput').value = el)

        function resState(){
            return debounce(state => localStorage.setItem('state', JSON.stringify(state)), 300)
        }

        this.subscrube(resState())

        this.$on('edit', (buttonType)=>{
            this.Sections.selected().forEach(selectEl=>{
                const styleSelectEl = selectEl.firstElementChild;
                if((buttonType === 'left')||(buttonType === 'center')||(buttonType === 'right')){
                    styleSelectEl.style.textAlign = buttonType
                }else{styleSelectEl.classList.add(buttonType)}
            })
        })
        this.$on('editDel', (buttonType)=>{
            this.Sections.selected().forEach(selectEl=>{
                const styleSelectEl = selectEl.firstElementChild;
                if((buttonType === 'bold')||(buttonType === 'italic')||(buttonType === 'undeLine')){
                    styleSelectEl.classList.remove(buttonType)
                }
            })
        })
    }
}
