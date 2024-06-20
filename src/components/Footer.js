import React, { useState, useEffect } from 'react';
import { getContactSectionData } from '../services/Contact';

function Footer() {
    const openUberEats= () => {
        window.open("https://www.ubereats.com/fr/store/pasta-e-polpette/q7J4GZ6zSkabzhJc0CMoFQ", "_blank");
    }

    const [contact, setContact] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            const data = await getContactSectionData();
    
            if(data){
              setContact(data.contact[0])
            }
        };
    
        fetchData();
      },[]);

    return (
        <div className="footer">
            {contact && (<div className="desktop">
                <div className=" row">
                    <div className="container">
                        <div className="row">
                            <img src="../images/apple.png" alt="Apple" className="apple" draggable={false}/>

                            <div className="container">
                                <h1 className="footer--title">Pasta e Polpette</h1>
                                
                                <span className="footer--subtitle">Les Pasta Lovers, les vrais !</span>
                                
                                <div className="button-group">
                                    {contact && (
                                        contact.instagram && (
                                            <a href={contact.instagram} target='_blank' rel="noreferrer">
                                                <img src="../images/SocialInsta.png" alt="Instagram" className="footer--icon" draggable={false}/>
                                            </a>
                                        )
                                    )}
                                    
                                    {contact && (
                                        contact.tiktok && (
                                            <a href={contact.tiktok} target='_blank' rel="noreferrer">
                                                <img src="../images/tiktokFot.png" alt="TikTok" className="footer--icon" draggable={false}/>
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <nav className="navigation">
                                <ul>
                                    <li>
                                        <a href="/mentions-legales">Mentions<br/>Légales</a>
                                    </li>
                                    <li>
                                        <a href="/#concept">Concept</a>
                                    </li>
                                    <li>
                                        <a href="/#menu">Menu</a>
                                    </li>
                                    <li>
                                        <a href="/#restaurant">Restaurant</a>
                                    </li>
                                    <li>
                                        <a href="/#contact">Contact</a>
                                    </li>
                                    <li>
                                        <div className="order-button">
                                            <button onClick={openUberEats}>Commander</button>
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
            </div>)}

            <div className="mobile">
                <div className="container">
                    <div className="row">
                        <img src="../images/apple.png" alt="Apple" className="apple" draggable={false}/>

                        <nav className="navigation">
                            <ul>
                                <li className="footer--title"> 
                                    Pasta e Polpette
                                </li>

                                <li>
                                    <a href="/mentions-legales">Mentions Légales</a>
                                </li>
                                <li>
                                    <a href="/#concept">Concept</a>
                                </li>
                                <li>
                                    <a href="/#menu">Menu</a>
                                </li>
                                <li>
                                    <a href="/#restaurant">Restaurant</a>
                                </li>
                                <li>
                                    <a href="/#contact">Contact</a>
                                </li>
                                <li className="footer--subtitle">
                                    Les Pasta Lovers, les vrais !
                                </li>
                            </ul>

                            <div className="row1">
                                {contact && (
                                    <div className="button-group nomarginTop">
                                        {contact.instagram && (
                                            <a href={contact.instagram} target='_blank' rel="noreferrer">
                                                <img src="../images/SocialInsta.png" alt="Instagram" className="footer--icon" draggable={false}/>
                                            </a>
                                        )}

                                        {contact.tiktok && (
                                            <a href={contact.tiktok} target='_blank' rel="noreferrer">
                                                <img src="../images/tiktokFot.png" alt="TikTok" className="footer--icon" draggable={false}/>
                                            </a>
                                        )}
                                    </div>
                                )}
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
