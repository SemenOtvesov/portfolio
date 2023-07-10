let checkStartEl = true
let startEl: null | HTMLElement
let startElposX = 0

let i = 0
export default(event: MouseEvent)=>{
    const target: any = event.target

    const mainRight = document.getElementById('mainRight')
    const mainRightResize = document.getElementById('mainRightResize')

    if(event.buttons === 1){
        if(checkStartEl){
            startEl = target
            startElposX = target.getBoundingClientRect().left + target.offsetWidth / 2
            checkStartEl = false

            if(!mainRight){return}
            if(i++ === 0){
                mainRight.dataset.ininWidth = `${mainRight.offsetWidth}`
                mainRight.dataset.maxWidth = `${mainRight.offsetWidth * 1.25}`
            }
        }
        if(startEl?.tagName === 'IMG'){
            mainRightResize?.classList.add('active')
            if(!mainRight){return}
            if(!mainRight.dataset.ininWidth){return}
            if(!mainRight.dataset.maxWidth){return}

            if(!mainRightResize){return}
            let resizeValue = event.clientX - startElposX
            if(resizeValue + +mainRightResize.offsetWidth > +mainRight.dataset.maxWidth){
                resizeValue = +mainRight.dataset.maxWidth - 1 - +mainRight.dataset.ininWidth
            }
            if(resizeValue + +mainRight.offsetWidth < +mainRight.dataset.ininWidth){
                resizeValue = +mainRight.dataset.ininWidth - +mainRight.offsetWidth
            }
            if(resizeValue + mainRightResize.offsetWidth < +mainRight.dataset.maxWidth){
                mainRightResize.style.cssText = `width: calc(100% + ${resizeValue}px)`
            }
            if(!mainRight){return}
            mainRight.dataset.width = `${mainRightResize.offsetWidth}`
        }
    }else{
        startElposX = 0
        checkStartEl = true
        mainRightResize?.classList.remove('active')
        if(!mainRight){return}
        mainRight.style.minWidth = mainRight.dataset.width +'px' || '0px'
        if(!mainRightResize){return}
        mainRightResize.style.width = '100%'
    }
}