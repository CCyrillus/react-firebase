import "./Subbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpload, faFileAlt, faFolderPlus } from "@fortawesome/free-solid-svg-icons"

const Subbar = () => {
    return (
        <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 px-5">
            <p>Root</p>

            <ul className="navbar-nav ms-auto">
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
                    <button className="btn btn-outline-dark">
                        <FontAwesomeIcon icon={faFolderPlus} /> &nbsp; Create File
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Subbar