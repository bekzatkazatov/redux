const initialState = {
    status: 'All',
    todos: []
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TODOS':
            return {...state, todos: action.payload}
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'EDIT_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            }
        default:
            return state
    }
}