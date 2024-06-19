function Concept() {
  return (
    <div className="concept">
        <img src="../images/restaurant.png" alt="" className="concept--image"/>

        <div className="concept--text">
          <h1 className="concept--title">Le concept : La cuisine italienne rapide</h1>

          <p className="concept--description">
            Pasta e Polpette propose un concept innovant qui combine l'authenticité des recettes traditionnelles italiennes, avec la rapidité et la commodité des fast foods modernes. Nous vous offrons des plats de qualité, préparés avec des ingrédients frais et authentiques... en moins de 5 minutes.
          </p>

          <div className="concept--skills">
              <div className="concept--skill">
                  <img src="../images/authentique.png" alt="Authentique" className="concept--icon"/>
                  <div className="text">Authentique</div>
              </div>

              <div className="concept--skill">
                  <img src="../images/rapide.png" alt="Authentique" className="concept--icon"/>
                  <div className="text">Rapide</div>
              </div>
          </div>

          <div className="concept--skills">
              <div className="concept--skill">
                  <img src="../images/qualitatif.png" alt="Authentique" className="concept--icon"/>
                  <div className="text">Qualitatif</div>
              </div>

              <div className="concept--skill command">
                  <img src="../images/commande-en-ligne.png" alt="Authentique" className="concept--icon"/>
                  <div className="text">Commande en ligne et sur place</div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Concept;
