export function capitalize(string){
    if(typeof string !== 'string'){return ''}
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function debounce(fn, time){
    let timeout
    return function(...args){
        const later = () =>{
            clearTimeout(timeout)
            return fn.apply(this, args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later(), time)
    }
}