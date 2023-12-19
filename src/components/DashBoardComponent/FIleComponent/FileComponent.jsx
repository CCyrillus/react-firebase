import { useState, useEffect } from "react";

import Header from "./Header"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux";
import CodeEditor from "./CodeEditor";


const FileComponent = () => {

    const navigate = useNavigate();
    const { fileId } = useParams();
    const [fileData, setFileData] = useState("");

    const [prevFileData, setPrevFileData] = useState("");

    const { currentFile, isAuthenticated } = useSelector((state) => ({
        isAuthenticated: state.auth.isAuthenticated,
        currentFile: state.filefolders.userFiles.find(
            (file) => file.docId === fileId
        ),
    }),
        shallowEqual
    );
    const downloadFile = () => {
        const element = document.createElement("a");
        element.setAttribute("href", currentFile.data.url);
        element.setAttribute("download", currentFile.data.name);
        element.setAttribute("target", "_blank");
        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element)
    }


    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/react-firebase/");
        }
    }, [isAuthenticated])


    useEffect(() => {
        if (currentFile) {
            setFileData(currentFile?.data?.data);
            setPrevFileData(currentFile?.data?.data)
        }
    }, [currentFile, currentFile?.data?.data])

    if (isAuthenticated)
        return (
            <div>
                {
                    fileData !== null ? (
                        <>
                            <Header
                                fileName={currentFile?.data?.name}
                                fileData={fileData}
                                prevFileData={prevFileData}
                                fileId={fileId}
                            />
                            <CodeEditor
                                fileName={currentFile?.data?.name}
                                data={fileData}
                                setData={setFileData}
                            /></>
                    ) : (
                        <>
                            <div className="position-fixed left-0 top-0 w-100 h-100 bg-black text-white">

                                {/* SUBAR  MENU*/}

                                <div className="d-flex py-4 px-5 mt-4 justify-content-between align-items-center">

                                    <p title={currentFile.data.name} className="my-0">
                                        {currentFile.data.name.length > 20 ? (
                                            currentFile.data.name.slice(0, 20) + "... ." + currentFile.data.extension
                                        ) : (
                                            currentFile.data.name
                                        )}
                                    </p>
                                    <div className="d-flex align-item-center me-5">
                                        <button
                                            className="btn btn-sm btn-outline-light me-2"
                                            onClick={() => navigate(-1)}
                                        >
                                            Go back
                                        </button>
                                        <button
                                            onClick={() => downloadFile()}
                                            className="btn btn-sm btn-primary "
                                        >
                                            Download
                                        </button>
                                    </div>

                                </div>

                                <div
                                    className="w-100 mt-4 "
                                >
                                    {
                                        currentFile.data.extension.includes("png") ||
                                            currentFile.data.extension.includes("jpg") ||
                                            currentFile.data.extension.includes("jpeg") ||
                                            currentFile.data.extension.includes("gif") ? (
                                            <img
                                                src={currentFile.data.url}
                                                alt={currentFile?.data?.name}
                                                className="w-100 h-100 img-fluid"
                                            />
                                        ) : (
                                            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                                <p className="text-center">
                                                    File type not supported. Please download the file to view it.
                                                </p>
                                            </div>
                                        )
                                    }
                                </div>

                            </div>
                        </>
                    )
                }

            </div >
        )
    return <div>Login First</div>
}

export default FileComponent