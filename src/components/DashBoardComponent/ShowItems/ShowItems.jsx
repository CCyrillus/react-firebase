import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeFolder } from '../../../redux/actionCreators/fileFoldersActionCreator';

const ShowItems = ({ title, items, type }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDblClick = (itemId) => {
        if (type === "folder") {
            dispatch(changeFolder(itemId));
            navigate(`/react-firebase/dashboard/folder/${itemId}`)
        } else {
            navigate(`/react-firebase/dashboard/file/${itemId}`)
        }
    }



    return (
        <div className="w-100">
            <h4 className="text-center border-bottom py-2">{title}</h4>
            <div className="row gap-2 py-4 flex-wrap ms-4">
                {items.map((item, index) => {
                    return (
                        <p
                            className='col-md-3 py-3 text-center border d-flex flex-column'
                            key={index * Math.random()}
                            onDoubleClick={() => handleDblClick(item.docId)}
                        >
                            {type === "folder" ? (
                                <FontAwesomeIcon
                                    icon={faFolder}
                                    size="4x"
                                    className="mb-3"
                                    style={{ color: "#ffd561", }}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faFileAlt}
                                    size="4x"
                                    className="mb-3"
                                    style={{ color: "#6297f4", }}
                                />
                            )}
                            {item.data.name.length > 20 ? (
                                item.data.name.slice(0, 20) + "... ." + (item.data.extension)
                            ) : (
                                item.data.name
                            )}
                        </p>
                    )
                })}
                {/* {!items.length && (
                    <p className="text-center my-5">
                        No downloaded files ...
                    </p>
                )} */}
            </div>
        </div>
    )
}

export default ShowItems