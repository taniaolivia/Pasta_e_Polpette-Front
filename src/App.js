import Concept from './components/Concept';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer'
import Contact from './components/Contact';
import Menu from './components/Menu';
import MenuCarousel from './components/MenuCarousel';
import './sass/App.scss';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Banner></Banner>
      <Concept></Concept>
      <Menu></Menu>
      <MenuCarousel></MenuCarousel>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
