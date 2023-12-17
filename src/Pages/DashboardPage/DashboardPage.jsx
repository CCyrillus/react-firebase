import { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Routes, useNavigate } from 'react-router-dom';

import NavBar from '../../components/DashBoardComponent/NavBar/NavBar';
import Subbar from '../../components/DashBoardComponent/SubBar/Subbar';
import HomeComponent from '../../components/HomeComponent/HomeComponent';

import { getFolders, getFiles } from '../../redux/actionCreators/fileFoldersActionCreator';
import { Route } from 'react-router-dom';

import FolderComponent from '../../components/DashBoardComponent/FolderComponent/FolderComponent';
import CreateFolder from '../../components/DashBoardComponent/CreateFolder/CreateFolder';
import CreateFile from '../../components/DashBoardComponent/CreateFile/CreateFile';
import FileComponent from '../../components/DashBoardComponent/FIleComponent/FileComponent';


const DashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false)
  const [isCreateFileModalOpen, setIsCreateFileModalOpen] = useState(false);

  const [showSubBar, setShowSubBar] = useState(true);

  const { isLoggedIn, isLoading, userId, userFiles, userFolders } = useSelector((state) => ({
    userFolders: state.filefolders.userFolders,
    isLoggedIn: state.auth.isAuthenticated,
    isLoading: state.filefolders.isLoading,
    userId: state.auth.user.uid,
    userFiles: state.filefolders.userFiles,
  }),
    shallowEqual
  );

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/react-firebase/")
    }
  }, []);
  useEffect(() => {
    if (isLoading && userId) {
      dispatch(getFolders(userId));
      dispatch(getFiles(userId));
    }
  }, [dispatch, isLoading, userId]);
  useEffect(() => {
    if (window.location.pathname.includes("/file/")) {
      setShowSubBar(false);
    } else {
      setShowSubBar(true)
    }
  }, [window.location.pathname])

  return (
    <>
      {
        isCreateFolderOpen && (
          <CreateFolder setIsCreateFolderOpen={setIsCreateFolderOpen} />
        )
      }
      {
        isCreateFileModalOpen && (
          <CreateFile setIsCreateFileModalOpen={setIsCreateFileModalOpen} />
        )
      }
      <NavBar />
      {showSubBar
        && (
          <Subbar
            setIsCreateFolderOpen={setIsCreateFolderOpen}
            setIsCreateFileModalOpen={setIsCreateFileModalOpen}
          />
        )
      }


      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="folder/:folderId" element={<FolderComponent />} />
        <Route path="file/:fileId" element={<FileComponent />} />
      </Routes>

    </>
  )
}

export default DashboardPage