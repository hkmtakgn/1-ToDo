import { useDispatch, useSelector } from "react-redux";
import { addTodo, clean, removeTodo } from "./todoSlice";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";

export default function Todo() {
    const dispatch = useDispatch();
    const state = useSelector((store) => store.todo);
    const [filterValue, setFilterValue] = useState("");
    const [priorityState, setPriorityState] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const ID = uuidV4();
        const inputValue = event.target.elements[0].value;
        const inputCheck = event.target.elements[1].checked;
        const inputsData = { task: inputValue.toLocaleLowerCase(), priority: inputCheck, id: ID };
        dispatch(addTodo(inputsData));
        event.target.reset();
    }

    function handleInputChange(event) {
        setFilterValue(event.target.value);
    }

    function handleRemoveTask(id) {
        dispatch(removeTodo(id));
    }

    function handlePriority() {
        setPriorityState(prev => !prev);
    }

    function handleClean () {
        dispatch(clean())
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="text-center">
                    <h1>ToDo</h1>
                    <input type="text" className="mb-1" /> <br />
                    <input type="checkbox" name="checkboxName" id="checkboxID" /> <br />
                    <input type="submit" value="Ekle" className="mb-2" /> <br />
                    <button type="button" onClick={handlePriority} className="my-1">{priorityState ? "Tüm Görevleri Göster" : "Öncelikli Olanları Getir"}</button> <br />
                    <input type="text"  onChange={handleInputChange} placeholder="filtrele" /> <br />
                    <input type="button" value="Temizle" className="my-1 btn btn-dark" onClick={handleClean}/>
                    
                </div>
            </form>
            <hr />
            <ul>
                {state
                    .filter(item => !filterValue || item.task.includes(filterValue.toLocaleLowerCase()))
                    .filter(item => !priorityState || item.priority)
                    .map(item => (
                        <li key={item.id} className="d-flex justify-content-between">
                            <span>{item.task}</span>
                            <span className="btn btn-danger" onClick={() => handleRemoveTask(item.id)}>Sil</span>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
