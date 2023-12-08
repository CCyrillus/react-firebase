import './App.css'
import { HomePage } from './Pages/HomePage'
import { Link, Outlet } from "react-router-dom";

const App = () => {

  return (
    <>
      <nav>
        <Link to="/react-firebase/">
          
        </Link>

        <Outlet />
      </nav>
    </>
  )
}

export default App
