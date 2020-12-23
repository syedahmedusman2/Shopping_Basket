import { createSlice } from '@reduxjs/toolkit'
import {State, Action} from './slicetypes'


const initialState: State =  {
  basket: [],
}

export const controllerSlice = createSlice({
    
  name: 'CART',
  initialState,
  reducers: {
    Add_To_Basket: (state: State, action: Action) => {       
      state.basket =  [...state.basket, action.payload]
    },
    Remove_From_Basket: (state: State, action: Action) => {
      let remArray = state.basket.filter(({id})=> id !== action.payload.id)
      state.basket = remArray
    },
    Clear_Basket: (state: State) => {
      state.basket = []
    }
  },
  });
  
  export const { Add_To_Basket, Remove_From_Basket } = controllerSlice.actions;
  
  export default controllerSlice.reducer;