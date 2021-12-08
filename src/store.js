import { configureStore } from '@reduxjs/toolkit'
import rootSlice from './reducers/rootSlice'

export default configureStore({
    reducer: {
        root: rootSlice
    },
})