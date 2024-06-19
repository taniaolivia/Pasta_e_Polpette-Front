import Concept from './components/Concept';
import Contact from './components/Contact';
import Menu from './components/Menu';
import MenuCarousel from './components/MenuCarousel';
import './sass/App.scss';

function App() {
  return (
    <div className="app">
      <Concept></Concept>
      <Menu></Menu>
      <MenuCarousel></MenuCarousel>
      <Contact></Contact>
    </div>
  );
}

export default App;
