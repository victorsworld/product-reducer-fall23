import React, {useState} from 'react'
import './ProductCard.css'

const ProductCard = (props) => {
    const [editBtn, setEditBtn] = useState(false)

    const [editProductObj, setEditProductObj] = useState({
        id: props.id,
        title: props.title,
        publisher: props.publisher,
        genre: props.genre,
        price: props.price
    })

const onChangeHandler = event => {
    setEditProductObj({
        ...editProductObj,
        [event.target.name]: event.target.value
    })
}

const saveProduct = () => {
    // let priceFixed = Number.parseFloat(editProductObj.price).toFixed(2)
    let priceFixed = (Math.round(Number.parseFloat(editProductObj.price) * 100) / 100).toFixed(2)
    // console.log(typeof priceFixed);
    setEditProductObj({
        ...editProductObj,
        price: priceFixed
    })
    props.editProduct({
        ...editProductObj,
        price: priceFixed
    })
    setEditBtn(!editBtn)
}
  return (
    <div className='product-card'>
          <h2>{props.title}</h2>
          <h3>Example</h3>
          {
            editBtn ? 
            (   
            <div>
                Example Edit<br/> 
                <label htmlFor='title'>Title: </label>
                <input
                    name='title'
                    type='text'
                    value={editProductObj.title}
                    onChange={onChangeHandler}
                /><br />
                <label htmlFor='publisher'>Publisher: </label>
                <input
                    name='publisher'
                    type='text'
                    value={editProductObj.publisher}
                    onChange={onChangeHandler}
                /><br />
                <label htmlFor='genre'>Genre: </label>
                <input
                    name='genre'
                    type='text'
                    value={editProductObj.genre}
                    onChange={onChangeHandler}
                /><br />
                <label htmlFor='price'>Price: </label>
                <input
                    name='price'
                    type='number'
                    step='.01'
                    min='0.01'
                    value={editProductObj.price}
                    onChange={onChangeHandler}
                /><br />

            <br />
                {/* <button onClick={() => {
                    props.editProduct(editProductObj)
                    setEditBtn(!editBtn)
                    }
                    }>Save Edits!</button> */}
                {/* same as above */}
                <button onClick={saveProduct}>Save Edits!</button>
                <button onClick={() => setEditBtn(!editBtn)}>Cancel</button>
            </div>
            )
            :
            (
                <React.Fragment>
                    <p>Publisher: {props.publisher}</p>
                    <p>Genre: {props.genre}</p>
                    <p>Price: ${props.price}</p>
                    <button onClick={() => {
                        //resets edit state from props
                        setEditProductObj({
                            id: props.id,
                            title: props.title,
                            publisher: props.publisher,
                            genre: props.genre,
                            price: props.price
                        })
                        setEditBtn(!editBtn)
                        }}>Edit</button>
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

    {/* <button onClick={() => setEditBtn(!editBtn)}>{editBtn ? <>True</> : <>False</>}</button> */}
          <button onClick={()=>props.deleteProduct(props.id)}>Delete</button>
    </div>
  )
}

export default ProductCard