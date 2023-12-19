import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

const CloseIcon = ({path}) => {

    const navigate = useNavigate();

    return (
        <button
            className="btn btn-sm btn-light"
            onClick={() => navigate(path)}
        >
            <FontAwesomeIcon
                icon={faTimes}
                className="text-black"
                size="m"
            />
        </button>
    )
}

export default CloseIcon