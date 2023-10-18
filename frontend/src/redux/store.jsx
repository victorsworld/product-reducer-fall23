import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';


const store = configureStore({
 reducer: {
   user: userReducer,
   products: productsReducer,
 },
});


export default store;
