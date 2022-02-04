import React from 'react';
import './usersBiographyHoc.css';
import {useSelector} from "react-redux";
import UsersBiography from "../usersBiography";

const UsersBiographyHoc = () => {
    const userPreview = useSelector(state => state.users.previewUser);

    const bio = <h1 className='bio'>You can click on <span>SEE MORE</span> to see biography user</h1>;

    return (
        <>
            {userPreview ? <UsersBiography/> : bio}
        </>
    );
};

export default UsersBiographyHoc;