import "./Subbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpload, faFileAlt, faFolderPlus } from "@fortawesome/free-solid-svg-icons"

const Subbar = ({ setIsCreateFolderOpen }) => {
    return (
        <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2">
            <p className="ms-5">Root</p>

            <ul className="navbar-nav ms-auto me-5">
                <li className="nav-item mx-2">

                    <button className="btn btn-outline-dark">
                        <FontAwesomeIcon icon={faUpload} /> &nbsp; Upload File
                    </button>
                </li>
                <li className="nav-item mx-2">
                    <button className="btn btn-outline-dark">
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
        </nav>
    )
}

export default Subbar