import Concept from './components/Concept';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer'
import Contact from './components/Contact';
import Menu from './components/Menu';
import MenuCarousel from './components/MenuCarousel';
import Restaurant from './components/Restaurant';
import MentionLegales from './components/MentionLegales';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './sass/App.scss';

function Home() {
  return (
    <div className="app">
      <Header></Header>
      <Banner></Banner>
      <Concept></Concept>
      <Menu></Menu>
      <MenuCarousel></MenuCarousel>
      <Restaurant></Restaurant>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionLegales />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
