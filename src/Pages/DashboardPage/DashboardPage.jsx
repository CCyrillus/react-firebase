import { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Routes, useNavigate } from 'react-router-dom';

import CreateFolder from '../../components/DashBoardComponent/CreateFolder/CreateFolder';
import NavBar from '../../components/DashBoardComponent/NavBar/NavBar';
import Subbar from '../../components/DashBoardComponent/SubBar/Subbar';
import HomeComponent from '../../components/HomeComponent/HomeComponent';

import { getFolders } from '../../redux/actionCreators/fileFoldersActionCreator';
import { Route } from 'react-router-dom';
import FolderComponent from '../../components/DashBoardComponent/FolderComponent/FolderComponent';
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false)
  const { isLoggedIn, isLoading, userId} = useSelector((state) => ({
    isLoggedIn: state.auth.isAuthenticated,
    isLoading: state.filefolders.isLoading,
    userId: state.auth.user.uid,
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
    }
  }, [isLoading, userId, dispatch]);

  return (
    <>
      {
        isCreateFolderOpen && (
          <CreateFolder setIsCreateFolderOpen={setIsCreateFolderOpen} />
        )
      }
      <NavBar />
      <Subbar
        setIsCreateFolderOpen={setIsCreateFolderOpen}
      />

      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="folder/:folderId" element={<FolderComponent />} />
      </Routes>

    </>
  )
}

export default DashboardPage