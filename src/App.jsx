import './App.css'
import { Link, Outlet } from "react-router-dom";

const App = () => {

  return (
    <>
      <nav>
        <Link to="/react-firebase/">
          Home
        </Link>
        <Link to="/react-firebase/login" className='text-danger'>
          Login
        </Link>
        <Link to="/react-firebase/register">
          register
        </Link>

        <Outlet />
      </nav>
    </>
  )
}

export default App
