import React, {useEffect} from 'react';
import './Users.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../redux/actions/usersFetchAction/actionFetchAction";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {setPreviewUser} from "../../redux/actions/setPreviewUserAction/setPreviewUserAction";

const Users = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    const handleUserPreview = (user) => {
        dispatch(setPreviewUser(user))
    };

    let namesArr = users.map(user => {
        return (
            <div key={user.id} className='usersBlock'>
                <div className='aa'>
                    <Card className='parentDiv'>
                        <CardActions className='parent'>
                            <Typography variant="body2">
                                <p className='namesP'>{user.name}</p>
                            </Typography>
                            <Button
                                className='buttonName'
                                size="small"
                                onClick={() => handleUserPreview(user)}
                            >
                                <p>See More <i className="fas fa-info"/></p>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    });

    return (
        <>
            {namesArr}
        </>

    );
};

export default Users;