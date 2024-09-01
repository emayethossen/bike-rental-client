import { Outlet } from "react-router-dom"
import Footer from "./components/ui/Footer"
import Navbar from "./components/ui/Navbar"

const App = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
