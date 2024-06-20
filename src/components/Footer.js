function Footer() {
    return (
        <div className="footer">
            <div className="desktop">
                <div className=" row">
                    <div className="container">
                        <div className="row">
                            <img src="../images/apple.png" alt="Apple" className="apple" draggable={false}/>

                            <div className="container">
                                <h1 className="footer--title">Paste e Polpette</h1>
                                
                                <span className="footer--subtitle">Les Pasta Lovers, les vrais !</span>
                                
                                <div className="button-group">
                                    <a href="https://www.instagram.com/pastaepolpette_fr/" target='_blank' rel="noreferrer">
                                        <img src="../images/SocialInsta.png" alt="Instagram" className="footer--icon" draggable={false}/>
                                    </a>

                                    <a href="https://www.instagram.com/pastaepolpette_fr/" target='_blank' rel="noreferrer">
                                        <img src="../images/tiktokFot.png" alt="TikTok" className="footer--icon" draggable={false}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <nav className="navigation">
                                <ul>
                                    <li>
                                        <a href="#Mentions">Mentions<br/>Légales</a>
                                    </li>
                                    <li>
                                        <a href="#Concept">Concept</a>
                                    </li>
                                    <li>
                                        <a href="#Menu">Menu</a>
                                    </li>
                                    <li>
                                        <a href="#Restaurant">Restaurant</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contact</a>
                                    </li>
                                    <li>
                                        <div className="order-button">
                                            <button>Commander</button>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            
                            <img src="../images/footer.png" alt="footer" className="footerImage" draggable={false}/>
                        </div>
                    </div>
                </div>


                <div className="fl">
                    <p>
                        &copy; Pasta E Polpette 2024
                    </p>
                </div>
            </div>

            <div className="mobile">
                <div className="container">
                    <div className="row">
                        <img src="../images/apple.png" alt="Apple" className="apple" draggable={false}/>

                        <nav className="navigation">
                            <ul>
                                <li className="footer--title"> 
                                    Paste e Polpette
                                </li>

                                <li>
                                    <a href="#Mentions">Mentions Légales</a>
                                </li>
                                <li>
                                    <a href="#Concept">Concept</a>
                                </li>
                                <li>
                                    <a href="#Menu">Menu</a>
                                </li>
                                <li>
                                    <a href="#Restaurant">Restaurant</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                                <li className="footer--subtitle">
                                    Les Pasta Lovers, les vrais !
                                </li>
                            </ul>

                            <div className="row1">
                                <div className="button-group nomarginTop">
                                    <a href="https://www.instagram.com/pastaepolpette_fr/" target='_blank' rel="noreferrer">
                                        <img src="../images/SocialInsta.png" alt="Instagram" className="footer--icon" draggable={false}/>
                                    </a>

                                    <a href="https://www.instagram.com/pastaepolpette_fr/" target='_blank' rel="noreferrer">
                                        <img src="../images/tiktokFot.png" alt="TikTok" className="footer--icon" draggable={false}/>
                                    </a>
                                </div>
                                <div className="order-button">
                                    <button>Commander</button>
                                </div>
                            </div>
                        </nav>

                        <img src="../images/footer.png" alt="footer" className="footerImage-mobile" draggable={false}/>
                    </div>

                    <div className="fl">
                        <p>
                            &copy; Pasta E Polpette 2024
                        </p>
                    </div>
                </div>
            </div>
        </div>);
}

export default Footer;
