import React from 'react';
import './usersBiography.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useSelector} from "react-redux";
import Album from "../album/Album";

const UsersBiography = () => {
    const userPreview = useSelector(state => state.users.previewUser);
    const albums = useSelector(state => state.users.albums);

    const filterAlbumsObj =  albums.map(item => {
        if (item.userId === userPreview.id ) {
            return item
        }
    } ).filter(x => x !== undefined);


    return (
        <div className='container'>
            <div className='imgIconDiv'>
                <CardMedia
                    className='cardMediaImg'
                    component="img"
                    height="280"
                    image="http://simpleicon.com/wp-content/uploads/user1.svg"
                    alt="usersIcon"
                />
            </div>
        <div className='divContainer'>

            <div>
                        <CardContent className='cardContentBlock'>
                            <Typography gutterBottom variant="h3" color="primary" component="div">
                                {userPreview.name}
                            </Typography>
                            <Typography variant="body2" color="black">
                                <h4 className='usersBioInfo'>Email:</h4>  {userPreview.email}
                            </Typography>
                            <Typography variant="body2" color="black">
                                <h4 className='usersBioInfo'>Phone:</h4>  {userPreview.phone}
                            </Typography>
                            <Typography variant="body2" color="black">
                                <h4 className='usersBioInfo'>Website:</h4>  {userPreview.website}
                            </Typography>
                            <Typography variant="body2" color="black">
                                <h4 className='usersBioInfo'>Company:</h4>  {userPreview.company.name}
                            </Typography>
                            <Typography variant="body2" color="black">
                                <h4 className='usersBioInfo'>City:</h4>  {userPreview.address.city}
                            </Typography>
                            <Typography variant="body2" color="black">
                                <h4 className='usersBioInfo'>Street:</h4>  {userPreview.address.street}
                            </Typography>
                            <Typography variant="body2" color="black">
                                <h4 className='usersBioInfo'>Suite:</h4>  {userPreview.address.suite}
                            </Typography>
                        </CardContent>
            </div>
            <Album album={filterAlbumsObj} />
        </div>
            </div>
    );
};

export default UsersBiography;