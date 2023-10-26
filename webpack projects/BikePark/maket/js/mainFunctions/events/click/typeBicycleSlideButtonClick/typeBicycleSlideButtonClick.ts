import { ReactEventHandler } from 'react';

const typeBicycleSlideButtonClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement

    const button:HTMLDivElement | null = target.closest('#typeBicycleSlideButton')
    const list = document.getElementById('typeBicycleList')

    if(!list){return}
    const itemsList =  list.querySelectorAll('[data-item-list]')
    const firstItemList = itemsList[0]
    const lastItemList = itemsList[itemsList.length-1]
    if(!firstItemList){return}
    const gapList = (list.scrollWidth - (4*firstItemList.scrollWidth))/3

    if(!button){return}
    if(!button.className.includes('active')){
        list.scrollLeft += firstItemList.scrollWidth + gapList/2
    }else{
        list.scrollLeft -= firstItemList.scrollWidth + gapList/2
    }
    setTimeout(()=>{
        const lastItemListRight = lastItemList.getBoundingClientRect().right
        const listRight = list.getBoundingClientRect().right

        if(Math.abs(lastItemListRight - listRight) <= 3){
            button.classList.add('active')
        }
        const firstItemListLeft = firstItemList.getBoundingClientRect().left
        const listLeft = list.getBoundingClientRect().left

        if(Math.abs(firstItemListLeft - listLeft) <= 3){
            button.classList.remove('active')
        }
    }, 300)
}
export default typeBicycleSlideButtonClick