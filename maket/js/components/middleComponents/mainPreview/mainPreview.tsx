import React from "react";
import PreviewBottomContent from "./previewBottomContent/previewBottomContent";
import PreviewTopContent from "./previewTopContent";

export default({scrollWidth}: {scrollWidth:number})=>{
    return <>
        <div className="main__preview wrapper-component">
            <div className="main__preview-top">
                <PreviewTopContent scrollWidth={scrollWidth}/>
            </div>

            <div className="main__preview-bottom">
                <PreviewBottomContent scrollWidth={scrollWidth} />
            </div>
        </div>
    </>
}