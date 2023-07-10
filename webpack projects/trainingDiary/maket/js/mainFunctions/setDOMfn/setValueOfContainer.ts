export function setValueOfContainer(){
    const textBlocks = document.querySelectorAll('#changeSize')

    textBlocks.forEach((el: any)=>{
        const fullContent: string = el.dataset.fullContent

        const elValueFZ: number = +window.getComputedStyle(el).fontSize.split('px')[0] * 0.7
        const elMaxValueWidth: number = fullContent.length * elValueFZ

        if(elMaxValueWidth > el.scrollWidth){
            const maxQuantitySimbols = Math.round(el.scrollWidth / elValueFZ)

            el.innerHTML = fullContent.slice(0, maxQuantitySimbols - 3) + '...'
        }else{
            el.innerHTML = fullContent
        }
    })
}