import Landingpage from './pages/Landingpage'
import "./App.css"
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from './pages/Education'
import Business from './pages/Business';
import Accessories from './pages/Accessories';
import Contactus from "./pages/Contactus"
import Footer from './components/Footer';
import ScrollUpBtn from './components/ScrollUpBtn';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <ScrollUpBtn />
      <Routes>
        <Route path='/' element={<Landingpage />}/>
        <Route path='/education' element={<Education />}/>
        <Route path='/business' element={<Business />}/>
        <Route path='/accessories' element={<Accessories />}/>
        {/* <Route path="/education/flat-panel" element={<h2>Flat Panel</h2>} />
        <Route path="/education/video-wall" element={<h2>Video Wall</h2>} />
        <Route path="/business/video-conferencing" element={<h2>Video Conferencing</h2>} />
        <Route path="/business/audio-conferencing" element={<h2>Audio Conferencing</h2>} />
        <Route path="/accessories/video-conferencing"element={<h2>Video Conferencing</h2>}/>
        <Route path="/accessories/audio-conferencing"element={<h2>Audio Conferencing</h2>}/> */}
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer/>
    </Router>
   
    

  )
}

export default App