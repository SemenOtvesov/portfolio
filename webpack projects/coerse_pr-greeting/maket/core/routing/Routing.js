import { $ } from "../Dom"

export class Routing{
    constructor(id, routes){
        this.el = document.querySelector(id)
        this.routes = routes

        this.changePathHendler = this.changePathHendler.bind(this)

        this.path = null
        this.init()
    }


    init(){
        window.addEventListener('hashchange', this.changePathHendler)
        this.changePathHendler()
    }

    changePathHendler(){
        const hash =  window.location.hash.slice(1)
        const hashEl = hash.split('/')

        const Ex = new this.routes.excel
        const Gr = new this.routes.greeting

        let root;
        if(hashEl.includes('excel')){root = Ex}else{root = Gr}
        if(root){
            if(this.path){root.destroy()}
            root.getRoot(this.el, hashEl[hashEl.length-1])
            root.afterRender()
            this.path = root
        }
    }
}