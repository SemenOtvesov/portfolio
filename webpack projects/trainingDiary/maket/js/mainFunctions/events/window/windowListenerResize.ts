import { setScrollWidthType } from "@js/types/functionTypes";
import { setValueOfContainer } from "@setDOMfn/setValueOfContainer";

export function windowListenerResize(setScrollWidth: setScrollWidthType){
    const scrollWidthConst = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    )
    setScrollWidth(scrollWidthConst)
    setValueOfContainer()
}