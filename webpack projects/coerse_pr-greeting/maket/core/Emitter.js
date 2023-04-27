export class Emitter{
    constructor(){
        this.listeners = []
    }

    emit(event, arg){
        if(this.listeners[event] !== undefined){
            this.listeners[event].forEach(element => {
                element(arg)
            });
            return true
        }else{return false}
    }
    subscrube(event, fn){
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn)
        return ()=>{
            this.listeners[event] = this.listeners[event].filter(el=>el !== fn)
        }
    }
}