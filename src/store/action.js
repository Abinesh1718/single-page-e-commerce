import { PRODUCT_ADD, PRODUCT_DECREMENT, PRODUCT_INCREMENT } from "./actionType";


export const handleAddProduct = (payload) => ({
    type: PRODUCT_ADD,
    payload
})

export const handleIncrement = (id) => (
    console.log(id),
    
    {
    type: PRODUCT_INCREMENT,
    payload: id
})
export const handleDecrement = (id) => ({
    type: PRODUCT_DECREMENT,
    payload: id
})