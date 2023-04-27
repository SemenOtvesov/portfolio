import React from 'react'

import Advertisement from '@elementUI/Advertisement.jsx'
import ElementAdvertisement from '@elementUI/ElementAdvertisement.jsx'

import TopProdust from '@elementUI/TopProdust.jsx'
import Products from '@midleComponents/Products.jsx'

export default (props)=>{
    return (
        <div className="main">
            <div className="main__container">
                <Advertisement sorce={{name:"Advertisement-image",type:'img'}}/>
                <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-image", altText:''}}/>
                {props.quantityEl(
                    <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-sale-image", altText:''}}/>, 
                    <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-sale-image", altText:''}}/>,
                    <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-sale-image-mbv", altText:''}}/>
                )
                }
                    {props.quantityEl( 
                        <TopProdust idList={[1, 3, 2, 6, 8]} firebaseConfig={props.firebaseConfig}/>,
                        <TopProdust idList={[1, 3, 2, 6]} firebaseConfig={props.firebaseConfig}/>,
                        <TopProdust idList={[1, 3, 2]} firebaseConfig={props.firebaseConfig}/>)
                    }
                {props.quantityEl(
                    <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-sale-image", altText:''}}/>, 
                    <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-sale-image", altText:''}}/>,
                    <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-sale-image-mbv", altText:''}}/>
                )}
                <div className="mainContentFlexBox adv">
                {props.quantityEl(
                    <>
                        <ElementAdvertisement type='mini' sorce={{name:"miniAdvertisement-image", altText:''}}/>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image", altText:''}}/>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image", altText:''}}/>
                    </>, 
                    <>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image-mbv", altText:''}}/>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image-mbv", altText:''}}/>
                    </>, 
                    <>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image-mbv", className: 'mobile', altText:''}}/>
                    </>)}
                </div>
                <div className="mainContentFlexBox">
                    {props.quantityEl(
                    <Products idList={[1, 5, 2, 6, 8]}  firebaseConfig={props.firebaseConfig}/>,
                    <Products idList={[1, 5, 2, 6]}  firebaseConfig={props.firebaseConfig}/>,
                    <Products idList={[1, 5, 2]}  firebaseConfig={props.firebaseConfig}/>)
                    }
                </div>
                <div className="mainContentFlexBox adv">
                    {props.quantityEl(
                    <>
                        <ElementAdvertisement type='mini' sorce={{name:"miniAdvertisement-image", altText:''}}/>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image", altText:''}}/>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image", altText:''}}/>
                    </>, 
                    <>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image-mbv", altText:''}}/>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image-mbv", altText:''}}/>
                    </>, 
                    <>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image-mbv", className: 'mobile', altText:''}}/>
                    </>)}
                </div>
                <div className="mainContentFlexBox">
                {props.quantityEl( 
                        <>
                            <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image", altText:''}}/>
                            <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image", altText:''}}/>
                        </>,
                        <>
                            <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image-mbv", altText:''}}/>
                            <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image-mbv", altText:''}}/>
                        </>,
                        <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image-mbv",className: 'mobile', altText:''}}/>)
                    }
                </div>
                <div className="mainContentFlexBox__title">Только до 24.01!</div>
                <div className="mainContentFlexBox">
                    {props.quantityEl(
                    <Products idList={[1, 3, 2, 6, 8]}  firebaseConfig={props.firebaseConfig}/>,
                    <Products idList={[1, 3, 2, 6]}  firebaseConfig={props.firebaseConfig}/>,
                    <Products idList={[1, 3, 2]}  firebaseConfig={props.firebaseConfig}/>)
                    }
                </div>
                <div className="mainContentFlexBox">
                {props.quantityEl( 
                        <>
                            <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image", altText:''}}/>
                            <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image", altText:''}}/>
                        </>,
                        <>
                            <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image-mbv", altText:''}}/>
                            <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image-mbv", altText:''}}/>
                        </>,
                        <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image-mbv",className: 'mobile', altText:''}}/>)
                    }
                </div>
                <div className="mainContentFlexBox">
                    {props.quantityEl( 
                        <Products idList={[1, 3, 2, 6, 8]}  firebaseConfig={props.firebaseConfig}/>,
                        <Products idList={[1, 3, 2, 6]}  firebaseConfig={props.firebaseConfig}/>,
                        <Products idList={[1, 3, 2]}  firebaseConfig={props.firebaseConfig}/>)
                    }
                </div>
                <div className="mainContentFlexBox adv">
                {props.quantityEl(
                    <>
                        <ElementAdvertisement type='mini' sorce={{name:"miniAdvertisement-image", altText:''}}/>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image", altText:''}}/>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image", altText:''}}/>
                    </>, 
                    <>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image-mbv", altText:''}}/>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image-mbv", altText:''}}/>
                    </>, 
                    <>
                        <ElementAdvertisement type='mini'sorce={{name:"miniAdvertisement-image-mbv", className: 'mobile', altText:''}}/>
                    </>)}
                </div>
                {props.quantityEl(
                    <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-sale-image", altText:''}}/>, 
                    <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-sale-image", altText:''}}/>,
                    <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-sale-image-mbv", altText:''}}/>
                )}
                <div className="mainContentFlexBox">
                    {props.quantityEl( 
                        <Products idList={[1, 3, 2, 6, 8]}  firebaseConfig={props.firebaseConfig}/>,
                        <Products idList={[1, 3, 2, 6]}  firebaseConfig={props.firebaseConfig}/>,
                        <Products idList={[1, 3, 2]}  firebaseConfig={props.firebaseConfig}/>)
                    }
                </div>
                {props.quantityEl(
                    <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-sale-image", altText:''}}/>, 
                    <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-sale-image", altText:''}}/>,
                    <ElementAdvertisement type='line' sorce={{name:"lineAdvertisement-sale-image-mbv", altText:''}}/>
                )}
            </div>
        </div>
    )
}