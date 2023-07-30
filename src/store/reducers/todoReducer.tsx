import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {ITodoState, ITodoTypes} from "../../model/todoReducer.model";
const initialState:ITodoState = {
    data:[
        {
            id:Math.random().toString(36).substr(2,6),
            title:'hello',
            available:true
        },
        {
            id:Math.random().toString(36).substr(2,6),
            title:'hello World',
            available:true
        },
    ]
}
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state , action:PayloadAction<string>) => {
            state.data.push({
                id:Math.random().toString(36).substr(2,6),
                title:action.payload,
                available:false
            })
        },
        deleteTodo: (state , action:PayloadAction<number | string>) => {
           state.data = state.data.filter(item => item.id !== action.payload)
        },
        checkTodo: (state , action:PayloadAction<number | string> ) => {
            state.data =  state.data.map((item) => item.id === action.payload
                ? {...item , available:!item.available} : {...item})
        },
        checkAllTodo:(state) => {
            state.data.map(item => item.available = true)
        },
        unCheckAllTodo:(state) => {
            state.data.map(item => item.available = false)
        },
        deleteAllTodo:(state)=> {
            state.data = []
        },
        editTodo:(state , action ) => {
            const id = action.payload.id
            state.data =  state.data.map(item => item.id === id ? { ...item, title:action.payload.title} : item)}

}
});
export const {addTodo,deleteTodo , checkTodo , checkAllTodo  ,unCheckAllTodo  ,deleteAllTodo , editTodo} = todoSlice.actions;
export default todoSlice.reducer;
