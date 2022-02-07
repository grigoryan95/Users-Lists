import React from 'react';
import './Album.css';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const Album = ({album}) => {
    return (
        <div>
            {
                album.map(item => {
                    return (
                        <CardContent key={item.id} className='albumBigBlock'>
                            <Typography gutterBottom variant="h5" color="primary" component="div">
                                <h4 className='usersBioInfo'>Albums Items:</h4> <span className='spanItem'>{item.title}</span>
                            </Typography>
                        </CardContent>
                    )
                })
            }
        </div>
    );
};

export default React.memo(Album);