import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFileData } from "../../../redux/actionCreators/fileFoldersActionCreator";

const Header = ({ fileName, fileData, prevFileData, fileId }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    return (
        <nav className="navbar navbar-expand-lg navbar-light mt-1 bg-white shadow-sm ">
            <p className="navbar-brand fw-bold ms-5 my-0">{fileName}</p>

            {fileData !== prevFileData && (
                <h5 className="my-0 fw-bold ms-2 text-danger">
                    *[modified]
                </h5>
            )}

            <ul className="navbar-nav ms-auto me-5">
                <li className="nav-item">
                    <button
                        className="btn btn-success"
                        disabled={fileData === prevFileData}
                        onClick={() => {
                            dispatch(updateFileData(fileId, fileData));
                        }}
                    >
                        <FontAwesomeIcon icon={faSave} /> Save
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-dark ms-2"
                    >
                        <FontAwesomeIcon icon={faArrowLeftLong} /> Go Back
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Header