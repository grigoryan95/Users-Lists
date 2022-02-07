import React from 'react';
import {useSelector} from "react-redux";
import UsersBiography from "../usersBiography";
import DeafaultShow from "../DefaultShow/DeafaultShow";

const UsersBiographyHoc = () => {
    const userPreview = useSelector(state => state.users.previewUser);

    return (
        <>
            {userPreview ? <UsersBiography/> : <DeafaultShow/>}
        </>
    );
};

export default UsersBiographyHoc;