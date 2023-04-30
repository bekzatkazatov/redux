import {applyMiddleware, combineReducers, createStore} from "redux";
import todosReducer from "./reduceer/todoReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import userReducer from "./reduceer/userReducer"


const store = createStore(combineReducers({
    todoReducer:todosReducer,
    userReducer:userReducer
}),

    composeWithDevTools(applyMiddleware(thunk)
    ))

export default store