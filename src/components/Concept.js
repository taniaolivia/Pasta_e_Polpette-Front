import React,{useState, useEffect}  from 'react';
import { getConceptSectionData } from '../services/Concept';

function Concept({dashboard}) {
  const [concept, setConcept] = useState(null);
  const [popup, setPopup] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: ""
  })

  useEffect(()=>{
    const fetchData = async () =>{
        const data = await getConceptSectionData();

        if(data){
          setConcept(data.concept[0])
        }
    };

    fetchData();
  },[]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openPopup = () => {
    setPopup(true);
  }

  return (
    <div className="concept" id="concept">
        {concept && (<img src={concept.image} alt="" className="concept--image" draggable={false}/>)}

        {concept && (<div className="concept--text">
          <h1 className="concept--title">{concept.title}</h1>

           <p className="concept--description">
            {concept.description}
          </p>

          <div className="concept--skills">
              <div className="concept--skill">
                  <img src="../images/authentique.png" alt="Authentique" className="concept--icon" draggable={false}/>
                  <div className="text">Authentique</div>
              </div>

              <div className="concept--skill">
                  <img src="../images/rapide.png" alt="Authentique" className="concept--icon" draggable={false}/>
                  <div className="text">Rapide</div>
              </div>
          </div>

          <div className="concept--skills">
              <div className="concept--skill">
                  <img src="../images/qualitatif.png" alt="Authentique" className="concept--icon" draggable={false}/>
                  <div className="text">Qualitatif</div>
              </div>

              <div className="concept--skill command">
                  <img src="../images/commande-en-ligne.png" alt="Authentique" className="concept--icon" draggable={false}/>
                  <div className="text">Commande en ligne et sur place</div>
              </div>
          </div>
        </div>)}

        {dashboard && (
          <img src="../images/edit.png" alt="Modifier" className='concept--edit' onClick={openPopup}/>
        )}

        {dashboard && popup && (
            <div className='popup'>
              <h1>Concept</h1>
              <div className='input'>
                <label>Titre</label>
                <input type="text" name="title" value={form.title} onChange={handleChange}></input>
              </div>

              <div className='input'>
                <label>Description</label>
                <input type="text" name="description" value={form.description} onChange={handleChange}></input>
              </div>

              <button className='popup--btn'></button>
            </div>
        )}
    </div>
  );
}

export default Concept;
