import React from "react";
import NavigationComponent from "../../components/HomePageComponent/Navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>

            <NavigationComponent />
            <h1 className="display-1 my-5 text-center">
                REACT FILE MANAGE HERE
            </h1>
            <h1 className="display-1 my-5 text-center">
                <Link to="/react-firebase/dashboard">
                    <FontAwesomeIcon icon={faDatabase}
                        beatFade
                        style={{ color: "#51ccf5", height: "3em", }}
                        className="display-2 ms-1"
                    />
                </Link>
            </h1>

        </>
    )
}

export default HomePage;