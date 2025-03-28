import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from "react-router-dom";
import './App.css'
import Homepage from "./Pages/Homepage";
import MatchGallery from "./Pages/MatchGallery";

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MatchGallery />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
