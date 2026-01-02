//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/App.css';


import { HashRouter, Routes, Route } from "react-router-dom";

//call components
import Header from './component/Header';
import About from './component/About';
import Gallery from './component/Gallery';
import Premium from './component/Premium';
import Contact from './component/Contact';
import Availability from './component/Availability Pages/Availability';
import Footer from './component/Footer';
import Calendar from './component/Availability Pages/Calendar';
import OurGallery from './component/OurGallery';
import Event from './component/Event Pages/Event';


const App = () => {
  return (
    <HashRouter >
      {/* Routing pages */}
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
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
              <Availability />
              <Calendar />
            </>
          }
        />

        <Route
          path='/availability/calendar' element={<Calendar />}
        />

        <Route
          path='/contact' element={<>
            <Contact />
            <Footer /></>}
        />

        {/* our gallery pages */}

        <Route path='/gallery' element={<OurGallery />} />


        {/* Event pages */}

        <Route path='/events' element={<Event />} />
        <Route path='weddings' element={<Event />} />
        <Route path='birthday' element={<Event />} />
        <Route path='corporate' element={<Event />} />
        <Route path='baby' element={<Event />} />
        <Route path='college' element={<Event />} />
        <Route path='religion' element={<Event />} />

      

      </Routes>





    </HashRouter>
  )
}

export default App

