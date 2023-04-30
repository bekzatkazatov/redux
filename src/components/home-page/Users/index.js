import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../redux/action/userAction";

const UsersPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    const users = useSelector(state => state.userReducer.users)

    return (
        <div>
            <h1>Users Page</h1>
            {
                <ul>
                    {users.map(user => <li key={user.id}>
                        {user.name}
                        {/*<button onClick={() => handleDelete(todo.id)}>delete</button>*/}
                        {/*<button onClick={() => setCurrentTodo(todo)}>edit</button>*/}
                    </li>)}
                </ul>
            }
        </div>
    );
};

export default UsersPage;
