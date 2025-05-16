import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDecrement, handleIncrement } from '../store/action';

function Cart({ products }) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    console.log("CART", cart);

    const isExistingCart = (id) => {
        const isExisting = cart?.find((data, i) => data.id == id)
        return isExisting?.quantity || 0
    }
    const handleSum = (q, p) => Math.round(q * p)
    const handleTotalSum = () => Math.round(cart.reduce((acc, value) => acc + value.price * value.quantity, 0))


    return (
        <><div className='cart-container'>
            <h1 className='cart-title'>Cart Container</h1>

            <div className="cart-list">



                {cart?.length > 0 ? cart?.map((pro, i) => (

                    <><div className="cart-product">
                        <img src={pro.image} />
                        <span>{pro.title}</span>
                        <button onClick={() => dispatch(handleIncrement(pro.id))} className='btn'>+</button>
                        <span>{isExistingCart(pro?.id)}</span>
                        <button onClick={() => dispatch(handleDecrement(pro?.id))} className='btn'>-</button>
                    </div>


                        <div className="indual-price">
                            {` = ${pro.quantity}  x Rs: ${pro.price} =${handleSum(pro.quantity, pro.price)}`}

                        </div>

                    </>

                )) : <h2>Cart is Empty</h2>



                }

                {cart?.length > 0 ?
                    <div className="total">
                        <h1> Total : 
                            <strong>Rs {handleTotalSum()}</strong>
                        </h1>

                    </div> : null}
            </div>

        </div></>
    )
}

export default Cart