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
const setChangeFolder = (payload) => ({
    type: types.CHANGE_FOLDER,
    payload,
})
// actions FILES
const addFile = (payload) => ({
    type: types.CREATE_FILE,
    payload,
})

const addFiles = (payload) => ({
    type: types.ADD_FILE,
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
            const folderId = folder.id;

            dispatch(addFolder({
                data: folderData,
                dosId: folderId
            }))

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
        .then((folders) => {
            const foldersData = []

            folders.docs.forEach((folder) => {
                foldersData.push({
                    data: folder.data(),
                    docId: folder.id,
                })
            });
            
            dispatch(addFolders(foldersData));
            dispatch(setLoading(false));
        });
}
export const changeFolder = (folderId) => (dispatch) => {
    dispatch(setChangeFolder(folderId))
}

// action creators FILES
export const getFiles = (userId) => (dispatch) => {
    fire
        .firestore()
        .collection("files")
        .where("userId", "==", userId)
        .get()
        .then((files) => {
            const arr = [];

            files.docs.forEach((file) => {
                arr.push({
                    data: file.data(),
                    docId: file.id,
                })
            })
            dispatch(addFiles(arr));
        })
}

export const createFile = (data, setSuccess) => (dispatch) => {
    console.log(data, setSuccess)
    fire
        .firestore()
        .collection("files")
        .add(data)
        .then(async (file) => {
            console.log(file)
            const fileData = await (await file.get()).data();
            const fileId = file.id;


            alert(`The ${fileData.name} file was successfully created`);
            dispatch(addFile({ data: fileData, docId: fileId }));
            setSuccess(true);
        })
        .catch((error) => {
            setSuccess(false);
            console.log(error)
        })

} 