import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CreateFolder from '../../components/DashBoardComponent/CreateFolder/CreateFolder';
import NavBar from '../../components/DashBoardComponent/NavBar/NavBar';
import Subbar from '../../components/DashBoardComponent/SubBar/Subbar';
import HomeComponent from '../../components/HomeComponent/HomeComponent';

const DashboardPage = () => {

  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false)

  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/react-firebase/")
    }
  }, [])

  return (
    <>
      {
        isCreateFolderOpen && (
          <CreateFolder setIsCreateFolderOpen={setIsCreateFolderOpen}/>
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