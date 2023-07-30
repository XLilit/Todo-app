import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import './style.scss'
import ModalComponent from "../../components/modal";
import {ITodoTypes} from "../../model/todoReducer.model";
import {checkTodo} from "../../store/reducers/todoReducer";
import TodoInput from "./components/todo-input";


// @ts-ignore
const localStorageArray = JSON.parse(localStorage.getItem('items')) || []
const TodoList = () => {
    const dispatch = useAppDispatch()
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const [uniqueItem, setUniqueItem] = useState<ITodoTypes | null>(null)
    const todos = useAppSelector((state) => state.TodoReducer.data)
        const [items, setItems] = useState(localStorageArray)
    useEffect(() => {
        setItems([...todos])
        localStorage.setItem('items', JSON.stringify(items))
        console.log(items , 'items')
    }, [todos])

    return (
        <div className='L-todos-list G-flex G-justify-around G-flex-wrap'>
            {items && items.map((item: ITodoTypes) => {
                return (
                    <div key={item.id} className='L-todo-item G-flex G-justify-between G-align-center'>
                        <input type="checkbox" checked={item.available} onChange={() => dispatch(checkTodo(item.id))}/>
                        <TodoInput
                            item={item}
                        />
                        <button className='L-delete-todo'
                                onClick={() => {
                                    setUniqueItem(item)
                                    setActiveModal(!activeModal)
                                }}
                        >&times;</button>

                    </div>
                )
            })}
            {uniqueItem && <ModalComponent
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                uniqueItem={uniqueItem}
            />}
        </div>
    );
};

export default TodoList;
