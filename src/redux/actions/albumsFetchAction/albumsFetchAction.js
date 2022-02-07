import {FETCH_ALBUMS} from "../../actionTypes/actionsTypes";

import React from 'react';

export const albumsFetchAction = (albums) => {
    return({
        type: FETCH_ALBUMS,
        payload: albums
    });
};

