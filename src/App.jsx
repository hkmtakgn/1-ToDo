import { Route, Routes } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import Todo from "./todo/Todo"
import Home from "./pages/Home"


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  )
}

export default App
