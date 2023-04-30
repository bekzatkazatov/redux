const initialState = {
    users: []
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, users: action.payload}
        case 'DELETE_USERS':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'EDIT_USERS':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            }
        default:
            return state
    }
}