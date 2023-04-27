import { Excel } from '@components/excel/Excel'
import { Editing } from '@components/editing/Editing'
import { Table } from '@components/table/Table'
import { File } from '@components/file/File'

import { createStore } from '@core/createStore'
import { rootReduser } from '@maket/rootReduser/rootReduser'
import { Page } from '../Page'

const store = createStore(rootReduser)

const excel = new Excel('#wrap', {
    components: [File, Editing, Table],
    store
})

export class ExcelRoot extends Page{
    getRoot(parent, excelId){
        excel.render(parent, excelId)
    }
    afterRender(){
        excel.init()
    }
    destroy(){
        excel.destroy()
    }
}