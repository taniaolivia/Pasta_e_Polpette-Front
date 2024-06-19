

function Banner() {
    return (
        <div className="banner">
            <div className="text-container">
                <div className="image-container1">
                    <div className="image-wrapper layer">
                        <img src="../images/Layer_2.png" alt="layer" />
                    </div>
                    <div className="image-wrapper orange">
                        <img src="../images/Orange.png" alt="orange" />
                    </div>
                </div>
                <div className="image-container2">
                    <div className="image-wrapper1 lovers">
                        <img src="../images/pasta.png" alt="lovers" />
                    </div>

                </div>
                <p>Ceci est un exemple de texte qui sera affiché à côté de l'image.</p>

                <div className="desktop">
                    <div className="button-group">
                        <button className="btn discover-btn">Découvrir</button>
                        <button className="btn icon-btn">
                            <img src="../images/instgram.png" alt="Instagram" className="icon" />
                        </button>
                        <button className="btn icon-btn">
                            <img src="../images/tiktok.png" alt="TikTok" className="icon" />
                        </button>
                    </div>
                </div>

            </div>
            <div className="desktop">
                <div className="image-container ">
                    <div className="image-wrapper second-image ">
                        <img src="../images/pastaefork.png" alt="Deuxième" />
                    </div>
                    <div className="image-wrapper first-image">
                        <img src="../images/mint.png" alt="Première" />
                    </div>
                </div></div>


            <div className="mobile">
                

                <div className="image-container">
                    <div className="button-group">
                        <button className="btn discover-btn">Découvrir</button>
                        <div className="btn-mob">
                            <button className="btn icon-btn">
                                <img src="../images/instgram.png" alt="Instagram" className="icon" />
                            </button>
                            <button className="btn icon-btn">
                                <img src="../images/tiktok.png" alt="TikTok" className="icon" />
                            </button>
                        </div>

                    </div>
                    <div className="image-wrapper second-image ">
                        <img src="../images/pastaefork.png" alt="Deuxième" />
                    </div>

                </div>
                <div className="image-wrapper first-image">
                    <img src="../images/mint.png" alt="Première" />
                </div>
            </div>








        </div>








    )

}
export default Banner;