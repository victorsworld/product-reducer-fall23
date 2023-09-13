import { useState, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

import productReducer from './reducers/productReducer'

function App() {

  const initialState = [
    {
      id: uuidv4(),
      title: "Hogwart's Legacy",
      publisher: "Warner Bros.",
      genre: "Adventure",
      price: 59.99
    },
    {
      id: uuidv4(),
      title: "Destiny 2",
      publisher: "Bungie",
      genre: "FPS",
      price: 29.99
    },
    {
      id: uuidv4(),
      title: "The Last of Us",
      publisher: "Sony",
      genre: "Adventure",
      price: 69.99
    },
    {
      id: uuidv4(),
      title: "Total War: Warhammer III",
      publisher: "Sega",
      genre: "Strategy",
      price: 49.99
    },
    {
      id: uuidv4(),
      title: "Everything, Everywhere, All at Once",
      publisher: "A24",
      genre: "Action/Adventure",
      price: 29.99      
    },
    {
      id: uuidv4(),
      title: "Dune",
      publisher: "Penguin Classics",
      genre: "Action/Adventure",
      price: 20.99     
    }
  ]
  const [product, dispatch] = useReducer(productReducer, initialState)

 

  return (
    <div>
      <h1>Product Reducer</h1>
      {
        product.map(element => {
          return (
            <p>{element.title}</p>
          )
        })
      }
    </div>
  )
}

export default App
