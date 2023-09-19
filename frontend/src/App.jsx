import { useState, useReducer, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

import productReducer from './reducers/productReducer'
import ProductCard from './components/ProductCard';

function App() {

  // const initialState = [
  //   {
  //     id: uuidv4(),
  //     type: 'game', 
  //     title: "Hogwart's Legacy",
  //     publisher: "Warner Bros.",
  //     genre: "Adventure",
  //     price: 59.99
  //   },
  //   {
  //     id: uuidv4(),
  //     type: 'game',
  //     title: "Destiny 2",
  //     publisher: "Bungie",
  //     genre: "FPS",
  //     price: 29.99
  //   },
  //   {
  //     id: uuidv4(),
  //     type: 'game',
  //     title: "The Last of Us",
  //     publisher: "Sony",
  //     genre: "Adventure",
  //     price: 69.99
  //   },
  //   {
  //     id: uuidv4(),
  //     type: 'game',
  //     title: "Total War: Warhammer III",
  //     publisher: "Sega",
  //     genre: "Strategy",
  //     price: 49.99
  //   },
  //   {
  //     id: uuidv4(),
  //     type: 'movie',
  //     title: "Everything, Everywhere, All at Once",
  //     publisher: "A24",
  //     genre: "Action/Adventure",
  //     price: 29.99      
  //   },
  //   {
  //     id: uuidv4(),
  //     type: 'book',
  //     title: "Dune",
  //     publisher: "Penguin Classics",
  //     genre: "Action/Adventure",
  //     price: 20.99     
  //   }
  // ]
  const initialState = []
  const [product, dispatch] = useReducer(productReducer, initialState)

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('http://localhost:4000/api/products/get-all-products')
      const data = await response.json()
      console.log(data)  
      dispatch({
        type: 'get-products',
        payload: data
      })
    }
    loadData()
  }, [])
  

  const deleteProduct = (id) => dispatch({
    type: 'delete',
    id: id
  })


  return (
    <div>
      <h1>Product Reducer</h1>
      {/* button dispatchs to add-product */}
      <button onClick={() => dispatch({type: 'add-product'})}>Add Product</button>

      {/* button should trigger a function that gets data from the /store/list-products route 
      and then dispatchs to the reducer which refactors the data into the format our store is using
      and then sets the state with the new data and the existing data*/}
      <button>Add Store/API products</button>

      {
        product.map(element => {
          return (
            <ProductCard
              key={element.id}
              id={element.id}
              title={element.title}
              type={element.type}
              publisher={element.publisher}
              genre={element.genre}
              price={element.price}
              deleteProduct={deleteProduct}
              editProduct={(param) => dispatch({
                type: 'edit',
                editObj:param
              })}
            />
          )
        })
      }
    </div>
  )
}

export default App
