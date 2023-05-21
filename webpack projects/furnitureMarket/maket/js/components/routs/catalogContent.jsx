import React from "react";
import MainItem from "@elements/catalogMainItem.jsx";

export default function catalogContent({splitArr, scrollWidth, catalogСhapter, data}){
    if(catalogСhapter && Object.values(data)[0] && data.itemList){
        let iteratorLine = 0
        if(scrollWidth > 425){
            return splitArr(data.itemList,3).map(el=>{
                return (
                    <div key={`catalogMainLine${iteratorLine++}`} className="catalog__main-line">
                        {el.map(item=>
                        <MainItem 
                            key={item.imageName} 
                            сhapter={catalogСhapter} 
                            chapterName={data.itemTitle} 
                            title={item.title} 
                            charpeterSection={item.imageName} 
                            imageName='preview' 
                            itemPath={item.path}
                        />)}
                    </div>
                )
            })
        }else{
            return splitArr(data.itemList,3).map(el=>el.map(item=>
            <MainItem 
                key={item.imageName} 
                сhapter={catalogСhapter} 
                chapterName={data.itemTitle}
                title={item.title} 
                charpeterSection={item.imageName} 
                imageName='preview' 
                itemPath={item.path}
            />))
        }
    }else if(Object.values(data)[0]){
        let iteratorLine = 0
        if(scrollWidth > 425){
            return splitArr(Object.values(data),3).map(el=>{
                return (
                    <div key={`catalogMainLine${iteratorLine++}`} className="catalog__main-line">
                        {el.map(item=>
                        <MainItem 
                            key={item.path} 
                            catalogMainRoute="true" 
                            сhapter={item.path} 
                            chapterName={data.itemTitle} 
                            title={item.itemTitle} 
                            itemPath={item.path}
                        />)}
                    </div>
                )
            })
        }else{
            return splitArr(Object.values(data),3).map(el=>el.map(item=>
            <MainItem 
                key={item.path} 
                catalogMainRoute="true" 
                сhapter={item.path} 
                chapterName={data.itemTitle} 
                title={item.itemTitle} 
                itemPath={item.path}
            />))
        }
    }
}