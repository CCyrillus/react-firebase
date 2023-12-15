import { useEffect } from "react";
import { getFolders } from "../../redux/actionCreators/fileFoldersActionCreator"
import ShowItems from "../DashBoardComponent/ShowItems/ShowItems"
import { shallowEqual, useDispatch, useSelector } from "react-redux";



const HomeComponent = () => {

    const files = [{ name: "New File" }, { name: "New File" }]
    const dispatch = useDispatch();

    const { isLoading, userFolders } = useSelector(
        (state) => ({
            isLoading: state.filefolders.isLoading,
            userFolders: state.filefolders.userFolders.filter(folder => folder.data.parent==="root"),
        }),
        shallowEqual
    );

    return (
        <div className="col-md-12 w-100">
            {
                isLoading ? (
                    <h1 className="display-1 my-5 text-center">Loading...</h1>
                ) : (
                    <>
                        <ShowItems
                            title={"Create Folders"}
                            type={"folder"}
                            items={userFolders} />
                        <ShowItems
                            title={"Create Files"}
                            type={"file"}
                            items={files}
                        />
                    </>
                )
            }

        </div>
    )
}

export default HomeComponent