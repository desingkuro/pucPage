import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutSection from "./components/AboutSection"
import { Description } from "./components/Description"
import Footer from "./components/Footer"
import { Main } from "./components/Main"
import Home from "./routes/home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
      <Description/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
