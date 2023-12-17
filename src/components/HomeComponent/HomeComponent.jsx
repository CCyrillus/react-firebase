import ShowItems from "../DashBoardComponent/ShowItems/ShowItems"
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const HomeComponent = () => {

    const dispatch = useDispatch();

    const { isLoading, userFolders, userFiles } = useSelector(
        (state) => ({
            isLoading: state.filefolders.isLoading,
            userFiles: state.filefolders.userFiles.filter(
                (folder) => folder.data.parent === "root"
            ),
            userFolders: state.filefolders.userFolders.filter(
                (folder) => folder.data.parent === "root"
            ),
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
                            items={
                                userFiles.filter((file) => file.data.url === null)
                            }
                        />
                    </>
                )
            }

        </div>
    )
}

export default HomeComponent