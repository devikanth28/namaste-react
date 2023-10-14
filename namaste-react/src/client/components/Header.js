import React, { useState } from "react"
import { Link } from "react-router-dom";
import FoodDelivaryLogo from '../../images/FoodDelivaryLogo.jpg';
import useInternetStatus from "../customehooks/useInternetStatus";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useInternetStatus()
    return(
        <div className="header">
            <div className="logo-container">
                <img src={FoodDelivaryLogo} height="64px" width="64px" alt="food delivary logo" />
            </div>
            <div className="nav-items">
                    <ul>
                        <li>Internet Status{onlineStatus ? "Online" :"Offline"}</li>
                        <Link to="/grocery"><li className="mt-2">Grocery</li></Link>
                        <li>Home</li>
                       <Link to="/about" className="mt-3"> <li>About Us</li></Link>
                        <li>Contact Us</li>
                        <li>cart</li>
                        <li className="bg-danger" onClick={()=>{btnName === "Login"? setBtnName("Logout") : setBtnName("Login") }}>{btnName}</li>
                    </ul>
            </div>
        </div>
    )
}
export default Header