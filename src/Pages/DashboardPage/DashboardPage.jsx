import { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CreateFolder from '../../components/DashBoardComponent/CreateFolder/CreateFolder';
import NavBar from '../../components/DashBoardComponent/NavBar/NavBar';
import Subbar from '../../components/DashBoardComponent/SubBar/Subbar';
import HomeComponent from '../../components/HomeComponent/HomeComponent';

import { getFolders } from '../../redux/actionCreators/fileFoldersActionCreator';


const DashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false)
  const { isLoggedIn, isLoading, userId } = useSelector((state) => ({
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
    if (userId && isLoading) {
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

        <HomeComponent />
    </>
  )
}

export default DashboardPage