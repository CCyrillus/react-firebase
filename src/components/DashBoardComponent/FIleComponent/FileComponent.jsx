import { useState, useEffect } from "react";

import Header from "./Header"
import { useNavigation, useParams } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux";
import CodeEditor from "./CodeEditor";


const FileComponent = () => {

    const navigate = useNavigation();
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
                <Header
                    fileName={currentFile?.data?.data}
                    fileData={fileData}
                    prevFileData={prevFileData}
                    fileId={fileId}
                />
                <CodeEditor
                    fileName={currentFile?.data?.data}
                    data={fileData}
                    setData={setFileData}
                />
            </div>
        )
    return<div>Login First</div>
}

export default FileComponent