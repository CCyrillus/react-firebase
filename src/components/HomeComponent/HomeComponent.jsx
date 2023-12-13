import { useSelector, shallowEqual } from "react-redux"
import ShowItems from "../DashBoardComponent/ShowItems/ShowItems"

const HomeComponent = () => {
    const folders = ["New Folder", "new folder 2"]
    const files = [{ name: "New File" }, { name: "New File" }]

    const { isLoading, userFolders } = useSelector(
        (state) => ({
            isLoading: state.filefolders.isLoading,
            userFolders: state.filefolders.userFolders,
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