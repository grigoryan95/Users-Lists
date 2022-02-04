import axios from "axios";
import {FETCH_USERS_NAMES} from "../../actionTypes/actionsTypes";

export const fetchUsers = () => {
    return (dispatch) => {
        axios({
            method: "get",
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then(response => {
                dispatch({
                    type: FETCH_USERS_NAMES,
                    data: response.data
                })
            }
        ).catch(error => console.error(error));
    };
};
