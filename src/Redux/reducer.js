import { createReducer } from "@reduxjs/toolkit"


export const cartReducer = createReducer({
    cartItems:[],
    subTotal:0,
    shipping:0,
    tax:0,
    total:0,
},{

    addToCart:(state,action)=>{
        const item = action.payload;
        const isItemExists = state.cartItems.find((i)=> i.id===item.id);

        if(isItemExists){
            state.cartItems.forEach(i=>{
                if(i.id === item.id) i.quantity+=1;
            });
        }
        else{
            state.cartItems.push(item);
        }
    },

    decrement:(state,action)=>{
        const item = state.cartItems.find((i)=> i.id===action.payload);
        if(item.quantity>1){
            state.cartItems.forEach((i)=>{
                if(i.id===item.id) i.quantity-=1;
            })
        }
        else{
            state.cartItems = state.cartItems.filter(i=>i.id!==action.payload);

        }
    },

    deleteFromCart:(state,action)=>{
        state.cartItems = state.cartItems.filter(i=>i.id!==action.payload);
    },

    calculatePrice:(state)=>{
        let sum=0;
        let taxrate = 0.18;
        state.cartItems.forEach(i=>sum+=i.price*i.quantity);
        state.subTotal = sum;
        state.shipping = state.subTotal>10000 ? 0 : 200;
        state.tax = sum*taxrate;
        state.total = state.subTotal + state.tax + state.shipping;
    }
});


