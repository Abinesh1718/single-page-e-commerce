import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddProduct, handleDecrement, handleIncrement } from '../store/action'

function Dashboard() {
    const [products, setproducts] = useState([])
    const [input, setinput] = useState("")
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const filterdData = products.filter((data) => data.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    useEffect(() => {
        const handleApi = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json()

                console.log(data);


                setproducts(data)


            } catch (error) {

            }
        }
        handleApi()

    }, [])

    const isExistingCart = (id) => {
        const isExisting = cart?.find((data, i) => data.id == id)
        return isExisting?.quantity || 0
    }

    return (
        <div className='container'>
            <h1 className='title'>Product List</h1>

            <div className='sub-container'>
                <input type='text' value={input} placeholder='Search Product...' onChange={(e) => setinput(e.target.value)} />
                <div className="list-product">
                    {filterdData?.map((pro, i) => (
                        <div className="product">
                            <img src={pro.image} />
                            <strong className='pro-title'>{pro.title}</strong>
                            <strong> Rs. {pro.price}</strong>
                            <div className="product-count">

                                {isExistingCart(pro?.id) > 0 ?
                                    <><button onClick={() => dispatch(handleIncrement(pro.id))} className="count-btn">+</button>
                                        <span className="count-value">{isExistingCart(pro?.id)}</span>
                                        <button onClick={() => dispatch(handleDecrement(pro?.id))} className="count-btn">−</button></> :
                                    <button onClick={() => dispatch(handleAddProduct(pro))} className="count-value">Add to Cart</button>
                                }

                            </div>

                        </div>

                    ))}


                </div>
            </div>

            <Cart products={products} />
        </div>
    )
}

export default Dashboard