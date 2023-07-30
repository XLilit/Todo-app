import React, {useState} from 'react';
import {ITodoTypes} from "../../model/todoReducer.model";
import {useAppDispatch} from "../../store/hooks";
import {addTodo, checkAllTodo, deleteAllTodo, unCheckAllTodo} from "../../store/reducers/todoReducer";
import './style.scss'
const AddTodo = () => {
    const dispatch = useAppDispatch();
    const [todo , setTodo  ] = useState<string>('')
    const handleChange = (e: { target: HTMLInputElement}) => {
        if(todo.length <= 25){
            setTodo(e.target.value)
        }
    }

    const handleClick = () => {
        if(todo && todo.trim()){
            dispatch(addTodo(todo))
        }
        setTodo('')
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) =>{
        if (event.key === 'Enter') {
            handleClick()
        }
    }
    return (
        <div className='L-add-todo G-flex G-justify-center G-align-center'>
            <input type="text" placeholder='your title' onChange={handleChange} value={todo} onKeyDown={handleKeyDown}/>
            <div className='L-add-btns'>
                <button className='G-button L-input-button L-add-btn'
                        onClick={handleClick}>ADD</button>
                <button className='G-button L-input-button L-add-btn-check'
                        onClick={() => dispatch(checkAllTodo())}>Check ALL</button>
                <button className='G-button L-input-button L-add-btn-unCheck'
                        onClick={() => dispatch(unCheckAllTodo())}>Uncheck ALL</button>
                <button className='G-button L-input-button L-add-btn-delete'
                        onClick={() => dispatch(deleteAllTodo())}>Delete ALL</button>
            </div>

        </div>
    );
};

export default AddTodo;
