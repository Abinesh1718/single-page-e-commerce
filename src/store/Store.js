
import { configureStore } from '@reduxjs/toolkit'
import Reducer from './Reducer'

const store = configureStore({
    reducer: {
        cart: Reducer
    }
})

export default store