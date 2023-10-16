import React from 'react'
import { CDN_URL } from '../common/constants'

const RestuarentCategoryItemList = ({ items }) => {
    return (
        <div>
            <div>
                {items.map((eachItem) => {
                    return (
                        <div className='p-2 m-3 border-bottom text-start d-flex justify-content-between'>
                            <div>
                                <span>{eachItem.card.info.name}</span>
                                <span> -  &#x20B9;   { eachItem.card.info.price ? eachItem.card.info.price / 100 : eachItem.card.info.defaultPrice / 100}</span>
                            <p className='text-secondary '>{eachItem.card.info.description}</p>
                            </div>
                            <div>
                            {eachItem.card.info.imageId && <><img src={CDN_URL + eachItem.card.info.imageId} style={{"width":"150px","height":"110px"}} className="rounded-2 d-block"/>
                            <button className='bg-dark border-0 rounded-3 position-absolute text-white fs-6 ms-2' style={{"margin-top":"-106px"}}>Add</button></>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RestuarentCategoryItemList