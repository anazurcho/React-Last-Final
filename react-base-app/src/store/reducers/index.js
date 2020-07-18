const initialState = {
    isAuthenticated: false,
    theme: "darkly",
    tokenLocal: "",
    firstName:"",
    lastName:"",
    email:"",
    password:""

}

const rand = Math.random().toString(30).substr(2);

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_AUTHENTICATED':
            return {
                ...state,
                isAuthenticated: true,
            };
        case 'USER_TOKEN':
            localStorage.setItem( "tokenLocal:", rand );
            return {
                ...state,
                tokenLocal: rand
            };
        case 'USER_LOGGED_OUT':
            localStorage.setItem( "tokenLocal:", "" );
            localStorage.setItem( "firstName:", "" );
            localStorage.setItem( "lastName:", "" );
            localStorage.setItem( "email:", "" );
            localStorage.setItem( "password:", "" );
            return {
                ...state,
                isAuthenticated: false,
                tokenLocal: ""
            };
        case 'CHANGE_THEME':
            return{
                ...state,
                theme: action.payload
            };
        case 'USER_INFO':
            localStorage.setItem( "firstName:", action.payload.firstName);
            localStorage.setItem( "lastName:", action.payload.lastName );
            localStorage.setItem( "email:", action.payload.email );
            localStorage.setItem( "password:", action.payload.password );
            return{
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                password: action.payload.password,
            };
        default:
            return state;
    }
}

export default reducer;