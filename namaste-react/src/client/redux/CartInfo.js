import React from 'react'
import { useSelector } from 'react-redux'
import RestuarentCategoryItemList from '../components/RestuarentCategoryItemList';
import { useDispatch } from 'react-redux';
import { clearCart } from './CartSlice';
import { useNavigate } from 'react-router-dom';
const CartInfo = () => {
  const navigate = useNavigate();
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems,"cartItems")
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart())
    }

  return (
    <div>
        <button className='btn btn-outline-danger' onClick={()=>{handleClearCart()}}>Clear Cart</button>
        {cartItems.length == 0 ? <>
        <h1>Your Cart Is Empty</h1>
        <button className='btn-success btn rounded-2 p-2' onClick={()=>{navigate("/")}}>Add Items</button>
        </>:
        <div className='container rounded-2' style={{"background":"#e9ecef"}}>
        <RestuarentCategoryItemList items={cartItems}/>
        </div>}
    </div>
  )
}

export default CartInfo