import axios from "axios";

export const getTodos = () => {
    return (dispatch) => {
        axios(
            'https://64357ec2537112453fd7f9f7.mockapi.io/todos')
            .then(({data}) => {
                dispatch({type: 'GET_TODOS', payload: data})
            })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        axios(`https://64357ec2537112453fd7f9f7.mockapi.io/todos/${id}`, {
            method: 'DELETE',
        })
            .then(({data}) => {
                dispatch({type: 'DELETE_TODO', payload: data.id})
            })
    }
}

export const editTodo = (todo) => {
    return (dispatch) => {
        axios(`https://64357ec2537112453fd7f9f7.mockapi.io/todos/${todo.id}`, {
            method: 'PUT',
            data: todo
        })
            .then(({data}) => {
                dispatch({type: 'EDIT_TODO', payload: data})
            })
    }
}


