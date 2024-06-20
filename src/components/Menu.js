import React,{useState, useEffect}  from 'react';
import { getMenuSectionData, updateMenuSectionData } from '../services/Menu';
import { useSelector } from 'react-redux';

function Menu({dashboard}) {
  const [menu, setMenu] = useState(null);
  const [popup, setPopup] = useState(false);
  const [form, setForm] = useState({
    description: ""
  })
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchData = async () =>{
        const data = await getMenuSectionData();

        if(data){
          setMenu(data.menu[0])
        }
    };

    fetchData();
  },[]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openPopup = () => {
    setPopup(true);
    setForm({
      description: menu.description,
    })
  }

  const editData = async () => {
    try {
      await updateMenuSectionData(form, token);
      const data = await getMenuSectionData();

      setMenu(data.menu[0]);
      setPopup(false);
    } 
    catch (error) {
      console.error("Failed to update menu section data:", error);
    }
  }

  const closePopup = () => {
    if(popup === true) {
      setPopup(false)
    } 
    else {
      setPopup(true)
    }
  }

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
        
        {dashboard && (
          <img src="../images/edit.png" alt="Modifier" className='edit' onClick={openPopup}/>
        )}

        {dashboard && popup && (
            <div className='popup'>
              <div className='popup--content'>
                <img src="../images/close.png" alt="Fermer" onClick={closePopup} className='popup--close'/>

                <h1 className='popup--title'>Menu</h1>

                <div className='input'>
                  <label>Description</label>
                  <textarea type="text" name="description" value={form.description} onChange={handleChange} className='textarea'></textarea>
                </div>

                <button className='popup--btn' onClick={editData}>Valider</button>
              </div>
            </div>
        )}
    </div>
  );
}

export default Menu;
