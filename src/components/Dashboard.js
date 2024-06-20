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
      <Banner dashboard={true}></Banner>
      <Concept dashboard={true}></Concept>
      <Menu dashboard={true}></Menu>
      <MenuCarousel dashboard={true}></MenuCarousel>
      <Contact dashboard={true}></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Dashboard;
