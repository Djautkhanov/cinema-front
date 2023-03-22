import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from './pages/Home/Home'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/home" element={<Home/>}/>   
    </Routes>
    </>
  )
}

export default App  