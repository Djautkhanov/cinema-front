import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import Home from './pages/Home/Home'
import './index.css'

const App = () => {
  return (
    <>
    <Header />
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home/>}/>   
    </Routes>
    </>
  )
}

export default App  