import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import useRestaurentMenu from '../customehooks/useRestaurentMenu';
const RestaurentMenu = () => {
    // const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams();
    const resInfo  = useRestaurentMenu(resId)
    // useEffect(()=>{
    //     featchMenu()
    // },[]);
    // const featchMenu = async () =>{
    //     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4471055&lng=78.37959769999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    //     const json = await data.json();
    //     console.log("json",json)
    //     setResInfo(json.data)
    //   }
      if(resInfo){
        const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
        console.log(name,"name",cuisines,costForTwoMessage)
        const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ?? [];

        // Now you can use itemCards without any issues, and if any intermediate value is not iterable, it will default to an empty array.
        
        // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards,"itemCards",itemCards)
      }
    // console.log(resInfo)
  return (
    <div>
        {resInfo && <div>
                <h3>{resInfo?.cards[0]?.card?.card?.info?.name}</h3>
                <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines}</p>
                <p>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
                {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title}
                <ul>
                  
                {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((eachItem)=>{
                  return(
                    <li>{eachItem.card.info.name} - Rs.{eachItem.card.info.price / 100}</li>
                  )
                })}
                </ul>
            </div>}
    
    </div>
    // <div>{resInfo?.cards[0]?.card?.card?.info?.name}</div>
  )
}

export default RestaurentMenu