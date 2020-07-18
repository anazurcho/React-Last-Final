const USER_AUTHENTICATED = "USER_AUTHENTICATED";
const CHANGE_THEME = "CHANGE_THEME";
const USER_LOGGED_OUT = "USER_LOGGED_OUT";
const USER_INFO = "USER_INFO";
const USER_TOKEN = "USER_TOKEN";

const userAuthenticated = () => {
    return {
        type: 'USER_AUTHENTICATED',
    };
}

const userLoggedOut = () => {
    return {
        type: 'USER_LOGGED_OUT'
    };
}

const changeTheme = ( theme ) => {
    return {
        type: 'CHANGE_THEME',
        payload: theme
    };
}
const userInfo = (firstName, lastName, email, password) => {
    return {
        type: 'USER_INFO',
        payload: {
            firstName,
            lastName,
            email,
            password
        }
    };
}
const userToken = () => {
    return {
        type: 'USER_TOKEN'
    };
}

export {
    userAuthenticated,
    userLoggedOut,
    changeTheme,
    userInfo,
    userToken,
    USER_AUTHENTICATED,
    CHANGE_THEME,
    USER_LOGGED_OUT,
    USER_INFO
}


