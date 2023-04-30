import axios from "axios";

export const getUsers = () => {
    return (dispatch) => {
        axios(
            'https://64357ec2537112453fd7f9f7.mockapi.io/users')
            .then(({data}) => {
                dispatch({type: 'GET_USERS', payload: data})
            })
    }
}

// export const editUser = () => {
//     return (dispatch) => {
//         axios(
//             'https://64357ec2537112453fd7f9f7.mockapi.io/users')
//             .then(({data}) => {
//                 dispatch({type: 'GET_USERS', payload: data})
//             })
//     }
// }
export const deleteUser = (id) => {
    return (dispatch) => {
        axios(`https://64357ec2537112453fd7f9f7.mockapi.io/users/${id}`, {
            method: 'DELETE',
        })
            .then(({data}) => {
                dispatch({type: 'DELETE_USERS', payload: data.id})
            })
    }
}