import './App.css'
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { checkIsLoggedIn } from './redux/actionCreators/authActionsCreator';
import { useEffect } from 'react';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsLoggedIn());
  }, [])


  return (
    <>
        <Outlet />
    </>
  )
}

export default App
