import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state, action)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length = 0
        },
        addSelectedItems : (state, action) => {
            state.items = action.payload
            console.log("action.payload", action.payload)
        }
    }
})
export const {addItem, removeItem, clearCart, addSelectedItems} = cartSlice.actions
export default cartSlice.reducer