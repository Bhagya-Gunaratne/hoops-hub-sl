import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from "react-router-dom";
import './App.css'
import NavBar from "./Components/NavBar/NavBar";

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
