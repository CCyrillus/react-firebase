import * as types from "../actionsTypes/authActionsTypes";
import fire from "../../config/firebase"

const loginUser = (payload) => {
    return {
        type: types.SIGN_IN,
        payload
    };
}
const logoutUser = (payload) => {
    return {
        type: types.SIGN_OUT,
    };
}

// action creator

export const signInUser = (email, password, setSucces) => (dispatch) => {
    fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(loginUser({
                uid: user.user.uid,
                displayName: user.user.displayName,
                email: user.user.email,
            }));
            setSucces(true);
        })
        .catch((error) => {
            alert("Invalid email or password!")
        })
}
export const signUpUser = (name, email, password, setSucces) => (dispatch) => {
    fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            fire.auth().currentUser.updateProfile({
                displayName: name,
            }).then(async () => {
                const currentUser = await fire.auth().currentUser;
                dispatch(loginUser({
                    uid: currentUser.uid,
                    name: currentUser.displayName,
                    email: currentUser.email,
                }));
                setSucces(true);
            }).catch((error) => {
                console.log(error)
            })
        })
        .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
                alert("This accont alredy registered!")
            }
            if (error.code === "auth/invalid-email") {
                alert("Invalid email!")
            }
            if (error.code === "auth/weak-password") {
                alert("Weak password!")
            }
        })
}
export const SignOutUser = () => (dispatch) => {
    fire
    .auth()
    .signOut()
    .then(() => {
        dispatch(logoutUser());
    })
    dispatch(logoutUser());
}

export const checkIsLoggedIn = () => (dispatch) => {
    fire.auth().onAuthStateChanged(user => {
        if (user) {
            dispatch(loginUser({
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
            }))
        }
    }
    )
}