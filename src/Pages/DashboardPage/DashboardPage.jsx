import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {

  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/react-firebase/")
    }
  },[])

  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage