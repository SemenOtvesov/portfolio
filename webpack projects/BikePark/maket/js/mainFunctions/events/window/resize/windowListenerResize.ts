type setScrollWidthType = (a: number)=> void

export function windowListenerResize(setScrollWidth: setScrollWidthType){
    const scrollWidthConst = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    )
    setScrollWidth(scrollWidthConst)
}