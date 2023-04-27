import React from "react";
import Product from "../elementUI/Product.jsx";

let i = 0
export default ({idList, favoritCheck})=>{
    return idList.map(elem=><Product key={'product'+ elem + i++} idProd={elem} favoritCheck={favoritCheck}/>)
}