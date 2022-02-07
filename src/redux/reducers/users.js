import React from "react";
import {FETCH_ALBUMS, FETCH_USERS_NAMES, SET_PREVIEW_USER} from "../actionTypes/actionsTypes";

const initialState = {
    users: [],
    previewUser: null,
    albums: []
};

export const users = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_NAMES: {
            return {
                ...state,
                users: action.data
            }
        }
        case FETCH_ALBUMS: {
            return {
                ...state,
                albums: action.payload
            }
        }
        case SET_PREVIEW_USER: {
            const currentUser = state.previewUser

            if  (currentUser && currentUser.id === action.data.id) {
                return {
                    ...state,
                    previewUser: null
                }
            }

            return {
                ...state,
                previewUser: action.data
            }
        }
        default:
            return state
    }
};