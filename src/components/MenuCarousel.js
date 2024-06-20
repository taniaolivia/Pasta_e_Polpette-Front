import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React,{useState, useEffect}  from 'react';
import { getMenuCarouselData, getMenuSectionData } from '../services/Menu';

function MenuCarousel() {
    const [menu, setMenu] = useState(null);
    const [carousel, setCarousel] = useState([]);

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
  
    const openMenu = () => {
      if(menu.menuPDF !== undefined) {
        window.open(menu.menuPDF, "_blank");
      }
    }

    useEffect(() => {
      const fetchData = async () =>{
          const data = await getMenuSectionData();
          const carouselData = await getMenuCarouselData();

          if(data && carouselData){
            setMenu(data.menu[0])
            setCarousel(carouselData.carousel)
          }
      };

      fetchData();
    },[]);

    const getAltText = (src) => {
      const filename = src.split('/').pop();
      return filename.split('.').slice(0, -1).join('.');
    };

    return (
        <div className='menuCarousel'>
            {carousel.length > 0 && (
              <Carousel
                responsive={responsive}
                swipeable={true}
                infinite={true}
                autoPlay={true}
                itemClass="carousel--image"
              >
                {carousel.map((c, index) => (
                  <img
                    key={index}
                    src={c.image} 
                    alt={getAltText(c.image)}
                    draggable={false}
                  />
                ))}
              </Carousel>
            )}

            <div className='openMenu-container'>
                <button className='openMenu' onClick={openMenu}>Voir le menu</button>
            </div>
        </div>
    );
  }
  
  export default MenuCarousel;
  