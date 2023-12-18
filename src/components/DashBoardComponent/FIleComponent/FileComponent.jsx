import { useState, useEffect } from "react";

import Header from "./Header"
import { useParams } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux";
import CodeEditor from "./CodeEditor";


const FileComponent = () => {

    const { fileId } = useParams();
    const [fileData, setFileData] = useState("");

    const [prevFileData, setPrevFileData]= useState("");

    const { currentFile } = useSelector((state) => ({
        currentFile: state.filefolders.userFiles.find(
            (file) => file.docId === fileId
        ),
    }),
        shallowEqual
    );

    useEffect(() => {
        if (currentFile) {
            setFileData(currentFile.data.data);
            setPrevFileData(currentFile.data.data)
        }
    }, [currentFile])

    return (
        <div>
            <Header
                fileName={currentFile.data.name}
                fileData={fileData}
                prevFileData={prevFileData}
                fileId={fileId}
            />
            <CodeEditor
                fileName={currentFile.data.name}
                data={fileData}
                setData={setFileData}
            />
        </div>
    )
}

export default FileComponent