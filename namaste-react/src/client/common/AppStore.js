import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/CartSlice";
import UserSlice from "../redux/UserSlice"

const AppStore = configureStore({
    reducer: {
        cart: cartReducer,
        users:UserSlice
    }
});

export default AppStore;