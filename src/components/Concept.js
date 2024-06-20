import React,{useState, useEffect}  from 'react';
import { getConceptSectionData } from '../services/Concept';

function Concept() {
  const [concept, setConcept] = useState(null);

  useEffect(()=>{
    const fetchData = async () =>{
        const data = await getConceptSectionData();

        if(data){
          setConcept(data.concept[0])
        }
    };

    fetchData();
  },[]);

  return (
    <div className="concept">
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
    </div>
  );
}

export default Concept;
