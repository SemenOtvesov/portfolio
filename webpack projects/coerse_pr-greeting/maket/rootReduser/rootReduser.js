export function rootReduser(state, action, excelId){
    let idExcelEl;
    if(!state[excelId]){
        idExcelEl = state[excelId] = {}
    }else{
        idExcelEl = state[excelId]
    }
    if(action.type === 'colResize'){
        if(!idExcelEl.hasOwnProperty('colResize')){
            idExcelEl.colResize = [action.data]
        }else{
            const checkNumCol = idExcelEl.colResize.find(element=>action.data === element.exId)
            if(checkNumCol){
                checkNumCol.widthCol = action.data.widthCol
            }else{idExcelEl.colResize.push(action.data)}
        }
    }

    if(action.type === 'rowResize'){
        if(!idExcelEl.hasOwnProperty('rowResize')){
            idExcelEl.rowResize = [action.data]
        }else{
            const checkNumCol = idExcelEl.rowResize.find(element=>action.data === element.exId)

            if(checkNumCol){
                checkNumCol.widthRow = action.data.widthRow
            }else{idExcelEl.rowResize.push(action.data)}
        }
    }

    if(action.type === 'exStateValue'){
        if(!idExcelEl.hasOwnProperty('exStateValue')){
            idExcelEl.exStateValue = action.data
        }else{
            action.data.forEach(element => {
                const checkExId = idExcelEl.exStateValue.find(ex=>element.exId === ex.exId)

                if(checkExId){
                    if(element.value[0] === '='){
                        const fn = element.value.slice(1)
                        const rez = eval(fn)
                        if(rez){
                            checkExId.value = rez
                            checkExId.inputValue = element.value
                        }
                    }else{
                        checkExId.value = element.value
                    }
                }else{
                    idExcelEl.exStateValue.push(element)
                }
            });
        }
    }

    if(action.type === 'exStateEdit'){
        if(!idExcelEl.hasOwnProperty('exStateEdit')){
            idExcelEl.exStateEdit = action.data
        }else{
            action.data.forEach(element=>{
                const checkStateEdit = idExcelEl.exStateEdit.find(ex=>element.exId === ex.exId)

                if(checkStateEdit){
                    if(element.posType){checkStateEdit.posType = element.posType}
    
                    if(element.boldType){checkStateEdit.boldType = element.boldType}
                    if(element.italicType){checkStateEdit.italicType = element.italicType}
                    if(element.underLineType){checkStateEdit.underLineType = element.underLineType}

                }else{idExcelEl.exStateEdit.push(element)}
            })
        }
    }

    if(action.type === 'deleteEditEl'){
        action.data.forEach(element=>{
            const checkStateEdit = idExcelEl.exStateEdit.find(ex=>element.exId === ex.exId)

            if(checkStateEdit){
                delete checkStateEdit[element.deleteElement]
            }
        })
    }

    if(action.type === 'resSelectEl'){
        idExcelEl.resSelectEl = action.data
    }
    
    if(action.type === 'resTableTitle'){
        idExcelEl.resTableTitle = action.data
    }

    return state
}