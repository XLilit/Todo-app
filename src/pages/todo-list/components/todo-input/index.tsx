import React, {useState} from 'react';
import {ITodoTypes} from "../../../../model/todoReducer.model";
import {useAppDispatch} from "../../../../store/hooks";
import {editTodo} from "../../../../store/reducers/todoReducer";
import './style.scss'
interface ITodoInput {
    item: ITodoTypes
}

const TodoInput = ({item}: ITodoInput) => {
    const dispatch = useAppDispatch()
    const [editInput, setEditInput] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(item.title)
    const handleClick = () => {
        setEditInput(!editInput)
    }
    const handleClickSave = () => {
        dispatch(editTodo({
            id: item.id,
            title: title
        }))
        setEditInput(!editInput)
    }
    const handleChange = (e: { target: HTMLInputElement }) => setTitle(e.target.value)
    return (
        <div className='L-edit-todo-wrapper G-flex G-justify-between'>
            {editInput
                ? <input className='L-edit-todo-input' type="text" value={title} onChange={handleChange}/>
                : <p className={item.available ? 'L-checked-todo-title L-todo-title' : 'L-todo-title'}>
                    {item.title}
                </p>
            }
            {editInput ? <button className='G-button L-edit-btn' onClick={handleClickSave}>
                    a
                </button>
                :
                <button  className='G-button L-edit-btn-edit'onClick={handleClick}>
                    q
                </button>}
        </div>
    );
};

export default TodoInput;
