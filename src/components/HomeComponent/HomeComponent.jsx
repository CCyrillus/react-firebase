import ShowItems from "../DashBoardComponent/ShowItems/ShowItems"

const HomeComponent = () => {
    const folders = ["New Folder", "new folder 2"]
    const files = ["New File", "new file 2"]

    return (
        <div className="col-md-12 w-100">
            <ShowItems title={"Create Folders"} items={folders} />
            <ShowItems title={"Create Files"} items={files} />
        </div>
    )
}

export default HomeComponent