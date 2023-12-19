import './App.css'
import { Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { checkIsLoggedIn } from './redux/actionCreators/authActionsCreator';
import { useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsLoggedIn());

  }, [])


  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default App
