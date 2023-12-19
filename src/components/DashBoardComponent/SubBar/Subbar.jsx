import { useNavigate } from "react-router-dom"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { changeFolder } from "../../../redux/actionCreators/fileFoldersActionCreator"
import { useState, useEffect } from "react";

import "./Subbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpload, faFileAlt, faFolderPlus } from "@fortawesome/free-solid-svg-icons"

const Subbar = ({ setIsCreateFolderOpen, setIsCreateFileModalOpen, setIsFileUploadModalOpen }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isChangedLink, setIsChangedLink] = useState("");
    const [isChangedId, setChangedId] = useState("");

    const { currentFolder, currentFolderData, userFolders } = useSelector(
        (state) => ({
            currentFolder: state.filefolders.currentFolder,
            currentFolderData: state.filefolders.userFolders.find(
                (folder) => folder.docId === state.filefolders.currentFolder
            ),
            userFolders: state.filefolders.userFolders,
        }), shallowEqual
    );

    useEffect(() => {
        if (isChangedLink.length > 0 && isChangedId.length > 0) {
            navigate(isChangedLink);
            dispatch(changeFolder(isChangedId));

            setIsChangedLink("");
            setChangedId("");
        }
    }, [isChangedLink, isChangedId, dispatch, navigate])

    return (
        <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2">

            <nav className="ms-5" aria-label="breadcrumb">
                <ol className="breadcrumb d-flex align-item-center">
                    {currentFolder !== "root" ? (
                        <>
                            <button
                                onClick={() => {
                                    setIsChangedLink("/react-firebase/dashboard"),
                                        setChangedId("root")
                                }
                                }
                                className="breadcrumb-item btn btn-link text-decoration-none"
                            >
                                / Root
                            </button>
                            {currentFolderData?.data.path.map((folder, index) => (
                                <button
                                    key={index}
                                    className="breadcrumb-item btn btn-link text-decoration-none"
                                    onClick={() => {
                                        setIsChangedLink(`/react-firebase/dashboard/folder/${userFolders.find((fldr) => folder === fldr.docId).docId}`),
                                            setChangedId(userFolders.find((fldr) => folder === fldr.docId).docId)
                                    }

                                    }
                                >
                                    {userFolders.find((fldr) => folder === fldr.docId).data.name}
                                </button>
                            ))}


                            <li className="breadcrumb-item active py-2 fw-bold">
                                {currentFolderData?.data.name}
                            </li>
                        </>
                    ) : (
                        <>
                            <button style={{ minHeight: "40px" }}
                                className="btn btn-link text-decoration-none fw-bold text-black" disabled>
                                / Root
                            </button>
                        </>
                    )}
                </ol>
            </nav>

            <ul className="navbar-nav ms-auto me-5">
                <li className="nav-item mx-2">

                    <button
                        className="btn btn-outline-dark"
                        onClick={() => {
                            setIsFileUploadModalOpen(true)
                        }}
                    >
                        <FontAwesomeIcon icon={faUpload} /> &nbsp; Upload File
                    </button>
                </li>
                <li className="nav-item mx-2">
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => setIsCreateFileModalOpen(true)}
                    >
                        <FontAwesomeIcon icon={faFileAlt} /> &nbsp; Create File
                    </button>
                </li>
                <li className="nav-item mx-2">
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => setIsCreateFolderOpen(true)}
                    >
                        <FontAwesomeIcon icon={faFolderPlus} /> &nbsp; Create Folder
                    </button>
                </li>
            </ul>
        </nav >
    )
}

export default Subbar