import React, {useState} from 'react'
import './ProductCard.css'

const ProductCard = (props) => {
    const [editBtn, setEditBtn] = useState(false)

  return (
    <div className='product-card'>
          <h2>{props.title}</h2>
          {
            editBtn ? 
            (   
            <>
                <h3>Editing</h3>
                <button>Save Edits!</button>
                <button onClick={() => setEditBtn(!editBtn)}>Cancel</button>
            </>
            )
            :
            (
                <React.Fragment>
                    <p>Publisher: {props.publisher}</p>
                    <p>Genre: {props.genre}</p>
                    <p>Price: {props.price}</p>
                    <button onClick={() => setEditBtn(!editBtn)}>Edit</button>
                </React.Fragment>
            )
          }
         

{/* 
          <button onClick={() => props.editProduct(
                {
                    id: props.id,
                    title: "Edited",
                    publisher: "Penguin Classics",
                    genre: "Action/Adventure",
                    price: 20.99     
                }
          )}>Edit</button> */}

          
          <button onClick={()=>props.deleteProduct(props.id)}>Delete</button>
    </div>
  )
}

export default ProductCard