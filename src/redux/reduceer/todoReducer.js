const initialState ={
    status:'All',
    todos:[]
}

export default function todosReducer (state = initialState,action){
    switch (action.type) {
        case 'GET_TODOS':
            return {...state,todos:action.payload}
        default:
            return state
    }
}