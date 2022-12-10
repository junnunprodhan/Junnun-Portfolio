
import './App.css';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Features from './Components/Features/Features';
import Footer from './Components/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <>
    <Header></Header>
     <Home></Home>
     <Features></Features>
     <Portfolio></Portfolio>
     <Resume></Resume>
     <Testimonial></Testimonial>
     <Blog></Blog>
     <Contact></Contact>
     <Footer></Footer>
    </>
  );
}

export default App;
