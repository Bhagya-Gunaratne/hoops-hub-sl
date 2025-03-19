import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from "react-router-dom";
import './App.css'
import Homepage from "./Pages/Homepage";

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
