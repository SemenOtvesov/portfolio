class createEl{
    constructor(el){
        this.$el = el
    }

    HTML(content){
        this.$el.innerHTML = content;
        return this
    }

    append(parent){
        parent.append(this.$el)
        return this
    }

    ajStyleSeparator(){
        this.$el.className.split(' ').forEach(element => {
            if(element === 'table'){
                const separator = document.querySelectorAll('[data-resize=column]')
                separator.forEach(el=>{
                    el.style.height = this.$el.clientHeight-26 + 'px'
                })
            }
        });
    }
}

export function $(element, classes = ''){
    return new createEl(element, classes)
}
$.create = (element, classes)=>{
    const el = document.createElement(`${element}`);
    if(classes){el.classList.add(...classes)}
    return $(el)
}
