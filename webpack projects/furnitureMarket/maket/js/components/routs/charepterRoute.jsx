import React from "react";
import СhapterItem from "@elements/chapterMainItem.jsx"
import { useLocation } from "react-router-dom";

export default function chapterContent({splitArr, scrollWidth, catalogСhapter, data}){
    const state = useLocation().state

    const charpeter = Object.values(data)[0]
    if(charpeter && charpeter.subList){
        document.getElementById('catalogTitle').innerHTML = charpeter.title

        let iteratorLine = 0
        if(scrollWidth > 425){
            return splitArr(charpeter.subList,3).map(el=>{
                return (
                    <div key={`catalogMainLine${iteratorLine++}`} className="catalog__main-line">
                        {el.map(item=>
                            <СhapterItem 
                                key={item.imageName} 
                                сhapter={catalogСhapter.split('/')[0]} 
                                chapterName={state.chapterName} 
                                charpeterSection={catalogСhapter.split('/')[1]}
                                charpeterSectionName={state.charpeterSectionName}
                                title={item.title} 
                                imageName={item.imageName} 
                                prise={item.prise}
                            />
                        )}
                    </div>
                )
            })
        }else{
            return splitArr(charpeter.subList,3).map(el=>el.map(item=>
            <СhapterItem 
                key={item.imageName} 
                сhapter={catalogСhapter.split('/')[0]} 
                chapterName={state.chapterName} 
                charpeterSection={catalogСhapter.split('/')[1]}
                charpeterSectionName={state.charpeterSectionName}
                title={item.title} 
                imageName={item.imageName} 
                prise={item.prise}
            />))
        }
    }
}