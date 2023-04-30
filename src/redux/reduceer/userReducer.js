const initialState = {
    status: 'All',
    users: []
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TODOS':
            return {...state, users: action.payload}
        case 'DELETE_TODO':
            return {
                ...state,
                users: state.users.filter(todo => todo.id !== action.payload)
            }
        case 'EDIT_TODO':
            return {
                ...state,
                users: state.users.map(todo => todo.id === action.payload.id ? action.payload : todo)
            }
        default:
            return state
    }
}