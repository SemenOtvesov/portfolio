import { DomListener } from './DomListener.js'
import { TableSection } from '@components/table/TableSection.js'

export class ExelComponetn extends DomListener{
    constructor(el, option){
        super(el, option.listeners)
        this.name = option.name || ''

        this.prepare()
        this.emitter = option.emitter
        this.unSubs = []
        this.storeSub = []

        this.store = option.store
        this.excelId = option.excelId
    }

    prepare(){
        
    }

    $emit(event, arg){
        this.emitter.emit(event, arg)
    }

    $on(event, fn){
        const unSub = this.emitter.subscrube(event, fn)
        this.unSubs.push(unSub)
    }

    dispatch(action){
        const state = JSON.parse(localStorage.getItem('state'))
        this.store.dispatch(state==null ? {}: state, action, this.excelId)
    }

    subscrube(fn){
        return this.storeSub = this.store.subscribe(fn)
    }

    init(){
        this.initDomListeners()
    }

    destroy(){
        this.removeDomListeners()
        this.unSubs.forEach(el=>el())
        this.storeSub = ''
    }
}