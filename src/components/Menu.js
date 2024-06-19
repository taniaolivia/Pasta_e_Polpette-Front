function Menu() {
  return (
    <div className="menu">
        <img src="../images/avocat.png" alt="" className="menu--avocado"/>

        <div className="menu--text">
          <h1 className="menu--title">Notre <span className="red">Menu</span></h1>
          <p className="menu--description">Que vous soyez amateur de pâtes savoureuses ou de délicieuses polpette, nos plats faits maison variés sauront combler toutes vos envies gourmandes. Que ce soit sur place, à emporter, ou en livraison, commandez chez nous et embarquez pour l’Italie.</p>
        </div>
        
        <img src="../images/boulette.png" alt="" className="menu--meatball"/>
    </div>
  );
}

export default Menu;
