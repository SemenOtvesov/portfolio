import { $ } from "@core/Dom";
import { Emitter } from "@core/Emitter";

export class Excel{
    constructor(idWrap, options){
        this.$wrap = document.querySelector(idWrap);
        this.components = options.components;
        this.store = options.store
        this.Emitter = new Emitter()

        this.extends = []
    }

    render(parent, excelId){
        this.extends = []
        parent.innerHTML = ''
        const emitter = this.Emitter
        const store = this.store

        let i = 0;
        this.components = this.components.map(Comp => {
            const el = $.create('div', Comp.class)
            const comp = new Comp(el, emitter, store, excelId)
            el.HTML(comp.toHTML()).append(parent).ajStyleSeparator()

            this.extends.push(comp)
            return Comp
        });
    }

    init(){
        this.extends.forEach(element => {
            element.init()
        })
    }

    destroy(){
        this.extends.forEach(element => element.destroy());
    }
}
