import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItem:[],
    totalAmount:0,
    totalQuantity:0
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,action)=>{
        const newItem =  action.payload
        const exixtItem =  state.cartItem.find(item=>item.id === newItem.id);

        state.totalQuantity++

        if(!exixtItem) {
            state.cartItem.push({
                id: newItem.id,
                productName: newItem.productName,
                imgUrl: newItem.imgUrl,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price
            })
        } 
        else {
            exixtItem.quantity++
            exixtItem.totalPrice = Number(exixtItem.totalPrice) + Number(newItem.price)
        }

        state.totalAmount = state.cartItem.reduce((total,item) => total + Number(item.price)* Number(item.quantity),0)
        
        console.log(state.totalQuantity);
        console.log(state.cartItem);
        console.log(newItem);
    },

    deleteItem:(state,action) => {
        const id = action.payload
        const exixtItem =  state.cartItem.find(item=>item.id === id);
        if(exixtItem) {
            state.cartItem = state.cartItem.filter(item => item.id !== id)
            state.totalQuantity = state.totalQuantity - exixtItem.quantity
        } 
        state.totalAmount = state.cartItem.reduce((total,item) => total + Number(item.price)* Number(item.quantity),0)
    }
  }
});

export const cartAction = CartSlice.actions

export default CartSlice.reducer