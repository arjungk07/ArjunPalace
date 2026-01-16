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
import Availability from '../src/Availability Pages/Availability'
import Footer from './component/Footer';
import Calendar from '../src/Availability Pages/Calendar';
import OurGallery from './component/OurGallery';
import Event from '../src/Event Pages/Event';
import View from './component/View';
import Package from '../src/Packages Page/Package';

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
     {/* Details route */}
        <Route
          path='details' element={<><Availability/><Calendar/></>}
        />

        {/* our gallery pages */}

        <Route path='/gallery' element={<OurGallery />} />
        <Route path='/View' element={<View/>}/>


        {/* Event pages */}

        <Route path='/events' element={<Event />} />
        <Route path='weddings' element={<Event />} />
        <Route path='birthday' element={<Event />} />
        <Route path='corporate' element={<Event />} />
        <Route path='baby' element={<Event />} />
        <Route path='college' element={<Event />} />
        <Route path='religion' element={<Event />} />
       
       {/* Packages page */}

        <Route path='/packages' element={<Package/>}/>
        <Route path='calculator' element={<Package/>}/>
        <Route path='blog' element={<Package/>}/>
        <Route path='vendor' element={<Package/>}/>
        <Route path='decor' element={<Package/>}/>
        <Route path='press' element={<Package/>}/>
        <Route path='booknow' element={<Package/>}/>




      </Routes>





    </HashRouter>
  )
}

export default App

