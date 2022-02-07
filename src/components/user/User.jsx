import {useDispatch} from "react-redux";
import {setPreviewUser} from "../../redux/actions/setPreviewUserAction/setPreviewUserAction";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";

const User = ({user}) => {
    const dispatch = useDispatch();
    const handleUserPreview = (user) => {
        dispatch(setPreviewUser(user))
    };

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
}

export default User;