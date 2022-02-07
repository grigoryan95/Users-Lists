import {FETCH_ALBUMS} from "../../actionTypes/actionsTypes";

export const albumsFetchAction = (albums) => {
    return({
        type: FETCH_ALBUMS,
        payload: albums
    });
};

