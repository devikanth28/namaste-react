import React from 'react'

const RestaurentCard = (props) => {
   const {name,cuisines,avgRating } = props.resturant;
  return (
    <div className='res-card' style={{backgroundColor:"#cfc7c7"}} >
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uqmyekamlphipqnj2iep" alt="food image" className='res-logo'/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
    </div>
  )
}

export default RestaurentCard