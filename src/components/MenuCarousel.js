import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

function openMenu() {
    window.open("../../documents/Menu.pdf", "_blank");
}

function MenuCarousel() {
    return (
        <div className='menuCarousel'>
            <Carousel 
            responsive={responsive} 
            swipeable={true}
            infinite={true}
            autoPlay={true}
            itemClass="carousel--image"
            >
                <img src="../../images/sexy zucchina x ti amo al tartufo.png" alt='sexy zucchina x ti amo al tartufo'/>
                <img src="../../images/quel gnocco x polpette della nonna.png" alt='quel gnocco x polpette della nonna'/>
                <img src="../../images/only for pasta lovers.png" alt='only for pasta lovers !'/>
            </Carousel>

            <div className='openMenu-container'>
                <button className='openMenu' onClick={openMenu}>Voir le menu</button>
            </div>
        </div>
    );
  }
  
  export default MenuCarousel;
  