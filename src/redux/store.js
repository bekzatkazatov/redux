import {applyMiddleware,createStore} from "redux";
import todosReducer from "./reduceer/todoReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";


const store = createStore(
    todosReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store