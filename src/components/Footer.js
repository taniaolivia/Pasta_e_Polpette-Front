function Footer() {
    return (
        <div className="footer">
            <div className="desktop">
                <div className=" row">
                    <div className="container">
                        <div className="row">
                            <div className="laye">
                                <img src="../images/laye.png" alt="laye" />
                            </div>
                            <div className="container">
                                <div className="row"><p>Paste e Polpette</p></div>
                                <div className="row">Les Pasta Lovers, les vrais !</div>
                                <div className="button-group">

                                    <button className="btn icon-btn">
                                        <img src="../images/SocialInsta.png" alt="Instagram" className="icon" />
                                    </button>
                                    <button className="btn icon-btn">
                                        <img src="../images/tiktokFot.png" alt="TikTok" className="icon" />
                                    </button>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="container">
                        <div className="row">
                            <nav className="navigation">
                                <ul>

                                    <li><a href="#Mentions">Mentions
                                        Légales</a></li>
                                    <li><a href="#Concept">Concept</a></li>
                                    <li><a href="#Menu">Menu</a></li>
                                    <li><a href="#Restaurant">Restaurant</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><div className="order-button">
                                        <button>Commander</button>
                                    </div></li>
                                </ul>
                            </nav>
                            <div className="footerImage">
                                <img src="../images/footer.png" alt="footer" />
                            </div>
                        </div>
                    </div>

                </div>


                <div className="fl">
                    <p >
                        &copy; Pasta E Polpette 2024
                    </p>
                </div>
            </div>

            <div className="mobile">
                <div className="container">
                    <div className="row">
                        <nav className="navigation">
                            <ul>
                                <li> <p>Paste e Polpette</p>
                                </li>

                                <li><a href="#Mentions">Mentions
                                    Légales</a></li>
                                <li><a href="#Concept">Concept</a></li>
                                <li><a href="#Menu">Menu</a></li>
                                <li><a href="#Restaurant">Restaurant</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><p>Les Pasta Lovers, les vrais !</p></li>
                                
                            </ul>
                            <div className="row1">
                                        <div className="button-group">

                                            <button className="btn icon-btn">
                                                <img src="../images/SocialInsta.png" alt="Instagram" className="icon" />
                                            </button>
                                            <button className="btn icon-btn">
                                                <img src="../images/tiktokFot.png" alt="TikTok" className="icon" />
                                            </button>
                                        </div>
                                        <div className="order-button">
                                            <button>Commander</button>
                                        </div>
                                    </div>
                        </nav>
                        


                    </div>
                    <div className="fl">
                    <p >
                        &copy; Pasta E Polpette 2024
                    </p>
                </div>
                </div>

            </div>
        </div>);
}

export default Footer;
