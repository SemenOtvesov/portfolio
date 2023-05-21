import {createApi, fetchBaseQuery}  from '@reduxjs/toolkit/query/react'
import { firebaseConfig } from '@firebaseFolder/firebaseInit.js'

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({baseUrl: firebaseConfig.databaseURL}),
    endpoints: build =>({
        getCatalogItem: build.query({
            query: (categoryObject = ' ')=> {
                const [categoryName, charpeterSection] = categoryObject
                if(charpeterSection){
                    return `catalog/${categoryName}/itemList.json?orderBy="imageName"&equalTo="${charpeterSection}"`
                }else if(categoryName){
                    if(categoryName === " "){
                        return `catalog.json`
                    }
                    return `catalog/${categoryName}.json`
                }
            }
        })
    })
})

export const {useGetCatalogItemQuery} = catalogApi