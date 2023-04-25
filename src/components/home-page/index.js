import React, {useEffect, useState} from "react";
import {deleteTodo, editTodo, getTodos} from "../../redux/action/todoAction"
import {useDispatch, useSelector} from "react-redux";

const HomePage = () => {
    const dispatch = useDispatch()
    const [currentTodo, setCurrentTodo] = useState()
    useEffect(() => {
        dispatch(getTodos())
    }, [])

    const todos = useSelector(state => state.todos)

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const edit = () => {
        dispatch(editTodo(currentTodo))
    }

    const handleEditChange = (e) => {
        setCurrentTodo({...currentTodo, text: e.target.value})
    }

    return (
        <div>
            <input type="text" value={currentTodo?.text} onChange={handleEditChange}/><button onClick={edit}>save</button>
            {
                <ul>
                    {todos.map(todo => <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDelete(todo.id)}>delete</button>
                        <button onClick={() => setCurrentTodo(todo)}>edit</button>
                    </li>)}
                </ul>
            }
        </div>
    )
}


export default HomePage;