//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";

//call components
import Header from './component/Header';
import About from './component/About';
import Gallery from './component/Gallery';
import Premium from './component/Premium';
import Contact from './component/Contact';
import Availability from './component/Availability Pages/Availability';
import Footer from './component/Footer';
import Calendar from './component/Availability Pages/Calendar';


const App = () => {
  return (
    <BrowserRouter basename='/ArjunPalace'>



      {/* Routing pages */}
      <Routes>

        {/* Home Page */}
        <Route
          path="ArjunPalace/"
          element={
            <>
              <Header />
              <About />
              <Gallery />
              <Premium />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Check Availability Page */}
        <Route
          path="/availability"
          element={
            <>
            <Availability/>
            <Calendar/>
            </>
          }
        />
        
        <Route path='/gallery' element={<Gallery/>}/>

      </Routes>



    </BrowserRouter>
  )
}

export default App

