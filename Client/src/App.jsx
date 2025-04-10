import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from "react-router-dom";
import './App.css'
import Homepage from "./Pages/Homepage";
import MatchGallery from "./Pages/MatchGallery";
import MatchInfoPage from "./Pages/MatchInfoPage";
import CourtsPage from "./Pages/CourtsPage";
import SingleCourtPage from "./Pages/SingleCourtPage";
import LogRegPage from "./Pages/LogRegPage";

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/matchgallery' element={<MatchGallery />}></Route>
          <Route path='/matchinfo' element={<MatchInfoPage />}></Route>
          <Route path='/courts' element={<CourtsPage />}></Route>
          <Route path='/singlecourt' element={<SingleCourtPage />}></Route>
          <Route path='/logreg' element={<LogRegPage />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
