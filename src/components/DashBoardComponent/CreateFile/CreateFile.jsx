import { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { createFile } from '../../../redux/actionCreators/fileFoldersActionCreator'



import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CreateFile = ({ setIsCreateFileModalOpen }) => {

    const [fileName, setFileName] = useState("");
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch();


    const { userFiles, user, currentFolder, currentFolderData } = useSelector(
        (state) => ({

            user: state.auth.user,
            currentFolder: state.filefolders.currentFolder,
            currentFolderData: state.filefolders.userFolders.find(
                (folder) => folder.docId === state.filefolders.currentFolder
            ),
            userFiles: state.filefolders.userFiles,
        }),
        shallowEqual
    );

    const checkFileAlreadyPresent = (name, extension) => {

        if(!extension){
            name = name + ".txt";
        }

        const filePresent = userFiles
            .filter((file) => file.data.parent === currentFolder)
            .find((fldr) => fldr.data.name === name);

        if (filePresent) {
            return true
        } else {
            return false;
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (fileName) {
            if (fileName.length > 3) {
                //Перевірка формату файла
                let extension = false;
                if (fileName.split(".").length > 1) {
                    extension = true;
                }
                console.log(extension)
                if (!checkFileAlreadyPresent(fileName, extension)) {
                    const data = {
                        createdAt: new Date(),
                        name: extension ? fileName : `${fileName}.txt`,
                        userId: user.uid,
                        createdBy: user.displayName,
                        path: currentFolder === "root"
                            ? []
                            : [...currentFolderData?.data.path, currentFolder],
                        lastAccess: null,
                        parent: currentFolder,
                        updatedAt: new Date(),
                        extension: extension ? fileName.split(".")[1] : "txt",
                        data: "",
                        url: null,
                    }
                    dispatch(createFile(data, setSuccess));
                } else {
                    alert(`${fileName} has alredy been created!`);
                }
            }
            if (fileName.length < 4) {
                alert(`The file name must be ate least 4 characters`);
            }

        } else {
            alert('The file name cannot be empty');
        }

    }

    useEffect(() => {
        if (success) {
            setFileName("");
            setSuccess(false);
            setIsCreateFileModalOpen(false);
        }
    }, [success])

    return (
        <div
            style={{ background: "rgba(0,0,0,0.4)", zIndex: 999 }}
            className="col-nd-12 position-fixed top-0 left-0 w-100 h-100"
        >
            <div className="row align-items-center justify-content-center">
                <div className="col-md-4 mt-5 bg-white rounded p-4">
                    <div className="d-flex justify-content-between">
                        <h4>Create File</h4>
                        <button className="btn btn-outline-light" onClick={() => setIsCreateFileModalOpen(false)}>
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-black"
                                size="sm"
                            />
                        </button>
                    </div>
                    <hr />
                    <div className="d-flex flex-column align-items-center">
                        <form className="mt-3 w-100" onSubmit={handleSubmit}>
                            <div className="formgroup">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fileName"
                                    placeholder='eg. file.txt, index.html, index.php, index.ts, index.js'
                                    value={fileName}
                                    onChange={(e) => setFileName(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary mt-5 form-control"
                            >
                                Create File
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateFile