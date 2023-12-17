import Header from "./Header"
import { useParams } from "react-router-dom"

const FileComponent = () => {

    const { fileId } = useParams()

    return (
        <div>
            <Header />
            FileComponent: {fileId}
        </div>
    )
}

export default FileComponent