import { PRODUCT_ADD, PRODUCT_DECREMENT, PRODUCT_INCREMENT } from "./actionType"



const Reducer = (state = [], action) => {
    console.log('ACTION', action);

    switch (action.type) {
        case PRODUCT_ADD: {
            const isExisting = state?.find((data, i) => data.id == action.payload.id)
            return isExisting ? state?.map((data, i) => data.id == action.payload.id ? { ...data, quantity: data.quantity + 1 } : data)
                : [...state, { ...action.payload, quantity: 1 }];
        }
        case PRODUCT_INCREMENT: {
            return state?.map((data, i) => data.id == action.payload ? { ...data, quantity: data.quantity + 1 } : data)
        }

        case PRODUCT_DECREMENT: {
            return state?.map((data, i) => data.id == action.payload ? { ...data, quantity: data.quantity - 1 } : data).filter(item => item?.quantity > 0)
        }


        default:
            return state
    }

}


export default Reducer