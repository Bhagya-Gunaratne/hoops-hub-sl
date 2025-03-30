import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from "react-router-dom";
import './App.css'
import Homepage from "./Pages/Homepage";
import MatchGallery from "./Pages/MatchGallery";
import MatchInfoPage from "./Pages/MatchInfoPage";

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/matchgallery' element={<MatchGallery />}></Route>
          <Route path='/matchinfo' element={<MatchInfoPage />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
