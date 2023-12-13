import fire from "../../config/firebase";
import * as types from "../actionsTypes/fileFoldersActionTypes";

// actions

const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
    payload,
})

const addFolders = (payload) => ({
    type: types.ADD_FOLDER,
    payload,
})

const setLoading = (payload) => ({
    type: types.SET_LOADING,
    payload,
})

// actions creators

export const createFolder = (data) => (dispatch) => {
    fire
        .firestore()
        .collection("folders")
        .add(data)
        .then(async (folder) => {
            const folderData = await (await folder.get()).data();

            dispatch(addFolder(folderData))

            alert(`The /${folderData.name}/ folder was successfully created`);
        });
};

export const getFolders = (userId) => (dispatch) => {
    dispatch(setLoading(true));

    fire
        .firestore()
        .collection("folders")
        .where("userId", "==", userId)
        .get()
        .then(async (folders) => {
            const foldersData = await folders.docs.map((folder) => folder.data());

            dispatch(addFolders(foldersData))
            dispatch(setLoading(false));
        });
}