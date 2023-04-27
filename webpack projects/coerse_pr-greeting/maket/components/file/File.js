import {ExelComponetn} from '@core/ExelComponetn.js'
export class File extends ExelComponetn{
    static class = ['main__file-box'];
    constructor(el, emit, store, excelId){
        super(el, {
            name: 'table', 
            listeners: ['input', 'click'],
            emitter: emit,
            store,
            excelId
        })
        this.state = JSON.parse(localStorage.getItem('state')) || {}
    }
    toHTML(){
        let stateEl = {}
        if(this.state.hasOwnProperty(this.excelId)){stateEl = this.state[this.excelId]}

        let titileValue
        if(stateEl.hasOwnProperty('resTableTitle')){titileValue = stateEl.resTableTitle}

        return `<input type="text" value="${titileValue || 'Новая таблица'}" class="main__file-name">
        <div class="main__file-del/exBox">
            <a data-button="trash" class="main__file-delete">
                <img src="./icon/trash.png" alt="">
            </a>
            <a data-button="exit" class="main__file-exit">
                <img src="./icon/exit.png" alt="">
            </a>
        </div>`
    }

    onInput(event){
        this.dispatch({type:'resTableTitle', data: event.target.value})
    }

    onClick(event){
        const parentEl = event.target.parentElement
    
        if(parentEl.dataset.button === 'trash'){
            let rezConf = confirm('Вы действительно хотите удалить эту таблицу?')

            if(rezConf){
                const newState = this.state
                delete newState[this.excelId]
                localStorage.setItem('state', JSON.stringify(newState))
                parentEl.setAttribute('href', '#')
            }
        }
        if(parentEl.dataset.button === 'exit'){
            parentEl.setAttribute('href', '#')
        }
    }
}