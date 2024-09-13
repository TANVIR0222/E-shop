import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products: [],
    selectedItem: 0,
    totalPrice : 0,
    tax : 0,
    texRate : 0.05,
    grandTotal : 0

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCard : (state,action) =>{
            const isExist = state.products.find(product => product._id === action.payload._id) ;

            if(!isExist){
                state.products.push({...action.payload , quantity: 1});
            }else{
                console.log('items add cart ');
                
            };

            state.selectedItem = selectedItem(state)
            state.totalPrice = setTotalPice(state)
            state.tax   = setTax(state)
            state.grandTotal   = setGrandTotal(state)


        }
    }
})

export const selectedItem = (state) => state.products.reduce((total , product) =>{
    return Number(total + product.quantity)
})

export const setTotalPice = (state) => state.products.reduce((total , product) =>{
    return Number(total + product.quantity  * product.price)
})

export const setTax = (state) => selectedItem(state)  * state.texRate;

export const setGrandTotal = (state) => {
    return setTotalPice(state) + setTotalPice(state)  * state.texRate;
}

export const {addToCard} =cartSlice.actions;

export default cartSlice.reducer;