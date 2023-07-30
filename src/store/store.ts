import {combineReducers, configureStore} from "@reduxjs/toolkit";
import TodoReducer from './reducers/todoReducer'

const rootReducer = combineReducers({
    TodoReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
