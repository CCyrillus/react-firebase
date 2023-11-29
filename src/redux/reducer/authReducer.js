const initialState = {}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // case "LOGIN":
        //     return {
        //         ...state,
        //         isAuth: true,
        //         user: action.payload
        //     }
        // case "LOGOUT":
        //     return {
        //         ...state,
        //         isAuth: false,
        //         user: {}
        //     }
        default:
            return state
    }
}

export default authReducer;