import { useState, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import productReducer from './reducers/productReducer';
import ProductCard from './components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import productCard from './components/ProductCard';
import {
  addProduct,
  getProducts,
  addStore,
  deleteProduct,
  editProduct,
} from './redux/productSlice';

function App() {
  const initialState = [];
  const [product, dispatch] = useReducer(productReducer, initialState);

  const baseURL = 'http://localhost:4000/api';

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(baseURL + '/products/get-all-products');
      const data = await response.json();
      console.log(data);
      dispatch(getProducts(data));
    };
    loadData();
  }, [dispatch]);

  const handleEditProduct = (editedProduct) => {
    dispatch(editProduct(editedProduct));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const getAPIdata = async () => {
    const response = await fetch(baseURL + '/store/list-products');
    const data = await response.json();
    dispatch(addStore(data));
  };

  return (
    <div>
      <h1>Product Reducer</h1>
      <button onClick={() => dispatch(addProduct())}>Add Product</button>
      <button onClick={getAPIdata}>Add Store/API Products</button>

      {product.map((element) => {
        return (
          <ProductCard
            key={element.id}
            id={element.id}
            title={element.title}
            type={element.type}
            publisher={element.publisher}
            genre={element.genre}
            price={element.price}
            deleteProduct={handleDeleteProduct}
            editProduct={handleEditProduct}
          />
        );
      })}
    </div>
  );
}

export default App;