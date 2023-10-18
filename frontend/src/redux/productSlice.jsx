import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'


const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        deleteProduct:(product, action) =>{
            // remove an object from the array
            // filter the array looking for the id
            console.log(action)
            let filteredArray = product.filter(element => element.id === action.payload ? false : true)
            return filteredArray;
        },
        editProduct: (state, action) => {
            return state.map((element) =>
              element.id === action.payload.id ? action.payload : element
            );
          },
          
        addProduct: (state) =>{
            // creates new empty object
            let newProduct = {
                id: uuidv4(),
                title: "",
                publisher: "", 
                genre: "",
                price: 0    
              }
            // inserts object into the index=0 of the state array
            let addArray = [
                newProduct,
                ...state
            ];
            return addArray // return to useReducer, which sets the state
        },
        getProducts: (state, action)=>{
            console.log(action.payload)
            return action.payload  //sets the payload data to the product state

        },
        addStore: (state,action)=>{
            console.log(action.payload)
            let payloadArr = action.payload.map(element => {
                return {
                        id: element.id,
                        title: element.gameTitle,
                        publisher: element.publisherName,
                        genre: element.genre,
                        price: element.MSRP
                        }
            })
            return [...payloadArr, ...state]
        },
    },
});


export const { deleteProduct, editProduct, addProduct, getProducts, addStore } = productSlice.actions;
export default productSlice.reducer;

