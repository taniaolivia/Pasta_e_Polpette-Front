import Concept from './components/Concept';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer'

import './sass/App.scss';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Banner></Banner>
      <Concept></Concept>
      <Footer></Footer>
    </div>
  );
}

export default App;
