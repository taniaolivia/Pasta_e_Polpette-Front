import Footer from "./Footer";
import Header from "./Header";
import Concept from './Concept';
import Banner from './Banner';
import Contact from './Contact';
import Menu from './Menu';
import MenuCarousel from './MenuCarousel';

function Dashboard() {
  return (
    <div className="dashboard">
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

export default Dashboard;
