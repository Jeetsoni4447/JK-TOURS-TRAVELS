import {
  Outlet
} from "react-router";
import Nav from './Components/Nav/Nav.jsx'
import Footer from './Components/Footer/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;