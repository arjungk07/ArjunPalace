//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/App.css';


//call components
import Header from './component/Header';
import About from './component/About';
import Gallery from './component/Gallery';
import Premium from './component/Premium';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Gallery/>
      <Premium/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

