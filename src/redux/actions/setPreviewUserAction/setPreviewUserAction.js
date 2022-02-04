import {SET_PREVIEW_USER} from "../../actionTypes/actionsTypes";

export const setPreviewUser = (user) => {
    return {
        type:SET_PREVIEW_USER,
        data: user
    };
};
