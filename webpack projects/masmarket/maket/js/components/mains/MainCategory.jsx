import React from 'react'
import { useParams } from 'react-router-dom'

import Products from '@midleComponents/Products.jsx'

const arrChechParams1 = [
    "Ice shoes and anti-slip stickers",
    "Brushes",
    "Insoles",
    "Shoe dryers",
    "Foot meters",
    "Deodorants for shoes",
    "Shoe covers",
    "Shoe Protection",
    "Boys",
    "Flip-flops and slates",
    "Work shoes",
    "Moccasins and topsiders",
    "Home shoes",
    "Espadrilles",
    "Ugg boots, valenki, dutiki",
    "Moccasins and topsiders",
    "Home shoes",
    "Ankle boots",
    "Sandals",
    "Ballet Flats",
    "Dyes",
    "Frames for clothes",
    "Academic clothing",
    "Uniforms",
    "To cooks and waiters",
    "Moisture-proof clothing",
    "School",
    "Girls",
    "T-shirts and T-shirts",
    "Sweaters, jumpers and cardigans",
    "Socks and leggings",
    "Underwear",
    "Sportswear",
    "Clothing of large sizes",
    "Clothing sets",
    "Jeans",
    "Skirts",
    "Thermal underwear",
    "Dresses and sundresses",
    "Underwear"
]
const arrChechParams2 = [
    "Suits and sets",
    "Overalls",
    "Clothing of large sizes",
    "Home clothes",
    "Outerwear",
    "Smart pens",
    "Robots and drones",
    "Mains filters, splitters and extension cords",
    "Chargers and Docking stations",
    "Smart Home",
    "Video Surveillance",
    "Aromabudilniki and cartridges",
    "Spare parts and Accessories for projectors",
    "Digital and Satellite TV",
    "Projectors",
    "Set-top boxes and media players",
    "Brackets",
    "Televisions",
    "Accessories and spare parts",
    "GPS trackers and GPS beacons",
    "Covers",
    "Optical filters for quadrocopters",
    "Virtual Reality",
    "Gaming peripherals",
    "Game consoles",
    "Gaming laptops",
    "Lighting equipment",
    "Accessories for photo and video equipment",
    "Cameras",
    "Action Cameras",
    "Amplifiers, receivers and DACs",
    "Loudspeakers",
    "Studio and stage equipment",
    "Players",
    "Microphones and Accessories",
    "Smart Speakers",
    "Portable Acoustics",
    "Acoustics and speakers",
    "Accessories for microscopes",
    "Accessories for telescopes"
]
const arrChechParams3 = [
    "Eyepieces",
    "Operating systems and applications",
    "Accessories for e-books",
    "Laptop accessories",
    "E-books",
    "Telescopes",
    "DECT-phones",
    "Mobile phones",
    "Accessories for smart watches and fitness bracelets",
    "SIM cards",
    "Smartphones",
    "Smart watches and fitness bracelets",
    "Accessories for smartphones and phones",
    "Wired phones",
    "Microscopes",
    "Tablets",
    "Accessories for tablets",
    "Headphones and headsets",
    "Walkie-talkies and radio stations",
    "Vinyl turntables and accessories",
    "Accessories for audio equipment",
    "Lenses and Accessories",
    "Video cameras and Accessories",
    "Photo cartridges and film",
    "Digital photo Frames",
    "Children's cameras and video cameras",
    "Spare parts",
    "Accessories for video game consoles",
    "Quadrocopters",
    "Accessories",
    "Batteries",
    "Car Navigators",
    "Tourist Navigators",
    "Electronic compasses",
    "DVD players",
    "Blu-ray players",
    "Antennas and Accessories",
    "TV Accessories",
    "Online cinemas",
    "Interactive panels"
]
const arrChechParams4 = [
    "LED screens",
    "Electronic Alarm clocks",
    "Radio Alarm clocks",
    "Security systems",
    "Cables and Adapters",
    "Batteries and Accumulators",
    "Cleaning products and wipes",
    "Protection from electromagnetic radiation",
    "Additional guarantees",
    "Audio and Video Cassettes",
    "Stylus Accessories",
    "Blouses and shirts",
    "Trousers, breeches, capris",
    "Jeans and jeggings",
    "Jackets and vests",
    "Sportswear",
    "Swimwear and beachwear",
    "Maternity clothes",
    "Wedding dresses",
    "Sweaters, jumpers and cardigans",
    "Hoodies and Sweatshirts",
    "T-shirts and Tops",
    "Stockings, Socks, Tights",
    "Shorts",
    "Trousers",
    "Outerwear",
    "Home clothes",
    "Overalls and overalls",
    "Suits, vests and jackets",
    "Beachwear",
    "Shirts",
    "Thermal underwear",
    "Hoodies and Olympians",
    "Shorts",
    "Boys",
    "Newborns",
    "Workwear",
    "Medical clothing",
    "Signal clothing",
    "For the food industry"
]
const arrChechParams5 = [
    "Burial clothes",
    "Uniforms for guards",
    "Accessories",
    "Church vestments",
    "Clothing care products",
    "Straps, elastic bands and strips",
    "Brushes for clothes",
    "Rollers-brushes for removing lint",
    "Patches",
    "Machines for removing pellets",
    "Boots and half-boots",
    "Sneakers and sneakers",
    "Medical shoes",
    "Work shoes",
    "Rubber shoes",
    "Clogs and mules",
    "Sandals",
    "Boots and ankle boots",
    "Shoes",
    "Flip-flops and slates",
    "Boots and half-boots",
    "Sneakers, sneakers and slip-ons",
    "Medical shoes",
    "Rubber shoes",
    "Sandals",
    "Boots and ankle boots",
    "Shoes",
    "Ugg boots, valenki, dutiki",
    "Espadrilles",
    "Girls",
    "School",
    "Sponges",
    "Decorations",
    "Cosmetics and cleaning products",
    "Pads",
    "Spoons and Horns",
    "Shoe Care Kits",
    "Shoe Liners",
    "Stretchers",
    "Napkins",
    "Shoelaces"
]

export default (props)=>{
    const params = useParams()
    if(arrChechParams1.includes(params.nameCategory)){
        return (
            <div className="main">
                <div className="main__container">
                    {createCategoryProds([12,34,56,83,51,52,53,17,54,82,43,76,78,89], props.quantityEl(5,4,3))}
                </div>
            </div>
        )
    }
    if(arrChechParams2.includes(params.nameCategory)){
        return (
            <div className="main">
                <div className="main__container">
                    {createCategoryProds([1,44,16,63,91,92,93,97,94,92,23,26,28,29], props.quantityEl(5,4,3))}
                </div>
            </div>
        )
    }
    if(arrChechParams3.includes(params.nameCategory)){
        return (
            <div className="main">
                <div className="main__container">
                    {createCategoryProds([21,84,16,23,31,42,63,97,24,22,33,66,77,88], props.quantityEl(5,4,3))}
                </div>
            </div>
        )
    }
    if(arrChechParams4.includes(params.nameCategory)){
        return (
            <div className="main">
                <div className="main__container">
                    {createCategoryProds([13,4,6,3,19,92,23,47,15,22,73,36,38,39], props.quantityEl(5,4,3))}
                </div>
            </div>
        )
    }
    if(arrChechParams5.includes(params.nameCategory)){
        return (
            <div className="main">
                <div className="main__container">
                    {createCategoryProds([22,34,66,93,11,72,33,77,24,32,13,26,7,8], props.quantityEl(5,4,3))}
                </div>
            </div>
        )
    }

}

function createCategoryProds(favoritesArr, iterator){
    const newArr = []
    const finalyComp = []
    for (let i = 0; i < favoritesArr.length; i += iterator) {;
        const el = favoritesArr.slice(i, i+iterator)
        newArr.push(el)
    }
    let lineIterator = 0
    newArr.forEach(el=>{
        if(el.length === iterator){
            finalyComp.push(<div key={'categoryLine'+ lineIterator++} className="mainContentFlexBox"><Products idList={el}/></div>)
        }else{
            finalyComp.push(<div key={'categoryLine'+ lineIterator++} className="mainContentFlexBox around"><Products idList={el}/></div>)
        }
    })
    return finalyComp
}