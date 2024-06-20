import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import store from './redux/store';
import Concept from './components/Concept';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer'
import Contact from './components/Contact';
import Menu from './components/Menu';
import MenuCarousel from './components/MenuCarousel';
import MentionLegales from './components/MentionLegales';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './sass/App.scss';


function Home() {
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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<MentionLegales />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
