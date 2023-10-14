import React, { useEffect, useState } from 'react'
import RestaurentCard from './RestaurentCard'
import { resData } from '../common/constants'
import { Link } from 'react-router-dom';
import useInternetStatus from '../customehooks/useInternetStatus';
const Body = () => {
    const [listOfRest, setListOfRes] = useState([]);
    const [searchText, setSearchText]=useState("");
    const [filtereRes, setFiltredRes]=useState([]);
    const onlineStatus = useInternetStatus();


    useEffect(()=>{
        featchData() 
    },[])


    const featchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFiltredRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }



    if(listOfRest?.length == 0){
       return <h1>Loading..........</h1> 
    }


    const handleSearch = () => {
        const filteredRestaurants = listOfRest.filter((eachRes) => {
            return eachRes?.info?.name.toLowerCase().includes(searchText.toLowerCase());
        });
    
        setFiltredRes(filteredRestaurants);
    };

    if(onlineStatus == false){
       return <h1>You are offline! plaese check your internet connection</h1>
    }

    return (
        <div className='body'>
            <div className='search d-flex'>
                <input type="search" className='search-box ms-3' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/><button className='me-3' onClick={()=>{handleSearch()}}>Search</button>
            <button className='filtred-btn'>Top Rated Resturants</button>
            </div>
            <div className='search'></div>
            <div className='res-container'>
                {filtereRes?.map((eachRes) => {
                    console.log(eachRes.info.id,"eachRes.info.id")
                    return (
                        <>
                            <Link to={"/restaurants/" + eachRes.info.id}><RestaurentCard resturant={eachRes.info}/></Link>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Body