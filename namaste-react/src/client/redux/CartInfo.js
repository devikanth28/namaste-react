import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RestuarentCategoryItemList from '../components/RestuarentCategoryItemList';
import { clearCart } from './CartSlice';
import { useNavigate } from 'react-router-dom';

const CartInfo = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cartItems")
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    console.log("useEffect is calling.............");
    return () => {
      console.log("useEffect return is calling.............");
      dispatch(clearCart());
    };
  },[]);

  return (
    <div>
      <button className='btn btn-outline-danger' onClick={handleClearCart}>
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <>
          <h1>Your Cart Is Empty</h1>
          <button className='btn-success btn rounded-2 p-2' onClick={() => navigate('/')}>
            Add Items
          </button>
        </>
      ) : (
        <div className='container rounded-2' style={{ background: '#e9ecef' }}>
          <RestuarentCategoryItemList items={cartItems} />
          <button className='btn-success btn rounded-2 p-2' onClick={() => navigate('/')}>
            Add Items
          </button>
        </div>
      )}
    </div>
  );
};

export default CartInfo;
