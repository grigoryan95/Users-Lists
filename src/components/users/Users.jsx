import React, {useEffect} from 'react';
import './Users.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../redux/actions/usersFetchAction/actionFetchAction";
import User from "../user/User";
import {asyncGetCallUsersApi} from "../../api/usersApi";
import {albumsFetchAction} from "../../redux/actions/albumsFetchAction/albumsFetchAction";


const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        (async () => {
            dispatch( albumsFetchAction( await asyncGetCallUsersApi() ) );
        })()
        dispatch( fetchUsers() )
    }, []);

    return (
        <>
            { users.map(user =>  <User key={user.id} user={user}/>) }

        </>

    );
};

export default Users;