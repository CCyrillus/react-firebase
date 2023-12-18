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

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/react-firebase/")
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
                            <h1 className="display-1 my-5 text-center">
                                Uploaded files preview in work
                            </h1>
                            <button
                                onClick={() =>  navigate(-1) }
                                className="btn btn-primary"
                            >
                                BACK
                            </button>
                        </>
                    )
                }

            </div>
        )
    return <div>Login First</div>
}

export default FileComponent