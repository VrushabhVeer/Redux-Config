import * as data from "./actionTypes";

const initialState = {
    isAuth: false,
    token: "",
    isAuthLoading: true,
};

const AuthReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case data.USER_LOGIN_REQUEST:
            return {
                ...state,
                isAuthLoading: true,
            };

        case data.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isAuthLoading: false,
                isAuth: true,
                token: payload,
            };

        case data.USER_LOGIN_FAILURE:
            return {
                ...state,
                isAuthLoading: false,
                isAuth: false,
                token: "",
            };

        default:
            return state;
    }
};

export { AuthReducer };
