import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { Home } from "./pages/Home"
import toast, { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "*" element = {<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
