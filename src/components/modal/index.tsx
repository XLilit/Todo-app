import React from 'react';
import './style.scss'
import {ITodoTypes} from "../../model/todoReducer.model";
import {deleteTodo} from "../../store/reducers/todoReducer";
import {useAppDispatch} from "../../store/hooks";
interface ModalProps {
    uniqueItem : ITodoTypes,
    activeModal:boolean,
    setActiveModal:(activeModal: boolean) => void;

}

const ModalComponent = ({uniqueItem , activeModal , setActiveModal}:ModalProps) => {
    const dispatch = useAppDispatch()
    return (
        <div className={activeModal ? 'L-modal L-active-modal':'L-modal'}
             onClick={() => setActiveModal(!activeModal)}>
            <div className="L-modal-content" onClick={e => e.stopPropagation()}>
                <p>Are You Sure?</p>
                <div className="L-modal-btn G-flex G-justify-around">
                    <button onClick={()=> {
                        dispatch(deleteTodo(uniqueItem.id))
                        setActiveModal(!activeModal)
                    }}>yes</button>
                    <button onClick={()=> setActiveModal(!activeModal)}>no</button>
                </div>

            </div>
        </div>
    );
};

export default ModalComponent;
