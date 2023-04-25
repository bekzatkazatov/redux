import axios from "axios";
const getTodos =()=> {
    return (dispatch)=> {
        axios(
            'https://64357ec2537112453fd7f9f7.mockapi.io/todos')
            .then(({data}) =>{
            dispatch({type:'GET_TODOS',payload: data})
        })
    }
}