import React,{useState, useEffect}  from 'react';
import { getMenuSectionData } from '../services/Menu';

function Menu({dashboard}) {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const fetchData = async () =>{
        const data = await getMenuSectionData();

        if(data){
          setMenu(data.menu[0])
        }
    };

    fetchData();
  },[]);

  return (
    <div className="menu" id="menu">
        <img src="../images/avocat.png" alt="" className="menu--avocado" draggable={false}/>
        
       {menu && (
          <div className="menu--text">
            <h1 className="menu--title">Notre <span className="red">Menu</span></h1>
            <p className="menu--description">{menu.description}</p>
          </div>
        )}
        
        <img src="../images/boulette.png" alt="" className="menu--meatball" draggable={false}/>
    </div>
  );
}

export default Menu;
