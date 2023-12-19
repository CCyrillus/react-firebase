import fire from "../../config/firebase";
import * as types from "../actionsTypes/fileFoldersActionTypes";

import { toast } from 'react-toastify';
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
const setFileData = (payload) => ({
    type: types.SET_FILE_DATA,
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

            toast.success(`The /${folderData.name}/ folder was successfully created`);
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
    console.log(data)
    fire
        .firestore()
        .collection("files")
        .add(data)
        .then(async (file) => {
            console.log(file)
            const fileData = await (await file.get()).data();
            const fileId = file.id;


            toast.success(`The ${fileData.name} file was successfully created`);
            dispatch(addFile({ data: fileData, docId: fileId }));
            setSuccess(true);
        })
        .catch((error) => {
            setSuccess(false);
            console.log(error)
        })

}

export const updateFileData = (fileId, data) => (dispatch) => {

    fire
        .firestore()
        .collection("files")
        .doc(fileId)
        .update({ data })
        .then(() => {
            console.log("fileId::::", fileId)
            console.log("data::::", data)
            dispatch(setFileData({ fileId, data }));
            toast.success("File saved successfully!")
        }).catch((error) => {
            console.log(error)
        })
}

export const uploadFile = (file, data, setSuccess) => (dispatch) => {
    const uploadFileRef = fire
        .storage()
        .ref(`files/${data.userId}/${data.name}`);

    uploadFileRef.put(file).on("state_changed", (snapshot) => {
        const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("uploading " + progress + "%")
    },
        (error) => {
            console.log(error)
        },

        async () => {
            const fileUrl = await uploadFileRef.getDownloadURL();
            const fullData = { ...data, url: fileUrl };

            fire
                .firestore()
                .collection("files")
                .add(fullData)
                .then(async (file) => {
                    const fileData = await (await file.get()).data();
                    const fileId = file.id;

                    dispatch(addFile({ data: fileData, docId: fileId }))

                    toast.success("File uploaded successfuly!");
                    setSuccess(true);
                })
                .catch((error) => {
                    setSuccess(false);
                    console.log(error)
                })
        }
    );
}