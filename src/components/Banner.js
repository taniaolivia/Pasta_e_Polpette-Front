import React, { useState, useEffect } from 'react';
import { getContactSectionData } from '../services/Contact';
import { getBannerSectionData } from '../services/Banner';

function Banner() {
    const openUberEats= () => {
        window.open("https://www.ubereats.com/fr/store/pasta-e-polpette/q7J4GZ6zSkabzhJc0CMoFQ", "_blank");
    }

    const [contact, setContact] = useState(null);
    const [banner, setBanner] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            const data = await getContactSectionData();
            const dataBanner = await getBannerSectionData();

            if(data && dataBanner){
                setContact(data.contact[0])
                setBanner(dataBanner)
            }
        };

        fetchData();
    },[]);

    return (
        <div className="banner">
             <div className="image-container1">
                <div className="image-wrapper layer">
                    <img src="../images/tomate.png" alt="Tomate" draggable={false}/>
                </div>
                <div className="image-wrapper orange desktop">
                    <img src="../images/Orange.png" alt="Orange" draggable={false}/>
                </div>

                <div className="image-wrapper orange-mobile mobile">
                    <img src="../images/Orange.png" alt="Orange" draggable={false}/>
                </div>
            </div>

            <div className="text-container">
                <div className="image-container2">
                    <div className="image-wrapper1 lovers">
                        <img src="../images/pasta.png" alt="Pasta lovers" draggable={false}/>
                    </div>
                </div>

                <p>""</p>

                <div className="desktop">
                    <div className="button-group">
                        <button className="btn discover-btn" onClick={openUberEats}>Découvrir</button>
                        
                        {contact && (
                            <a href={contact.instagram} target='_blank' rel="noreferrer">
                                <button className="btn icon-btn">
                                    <img src="../images/instgram.png" alt="Instagram" className="icon" draggable={false}/>
                                </button>
                            </a>
                        )}

                        {contact && (
                            contact.tiktok && (
                                <a href={contact.tiktok} target='_blank' rel="noreferrer">
                                    <button className="btn icon-btn">
                                        <img src="../images/tiktok.png" alt="TikTok" className="icon" draggable={false}/>
                                    </button>
                                </a>
                            )
                        )}
                    </div>
                </div>

            </div>

            <div className="desktop">
                <div className="image-container ">
                    <img src="../images/pastaefork.png" alt="Deuxième" className="second-image" draggable={false}/>

                    <div className="image-wrapper first-image">
                        <img src="../images/Mint.png" alt="Première" draggable={false}/>
                    </div>
                </div>
            </div>

            <div className="mobile">
                <div className="image-container">
                    <div className="button-group">
                        <button className="btn discover-btn" onClick={openUberEats}>Découvrir</button>
                        
                        <div className="btn-mob">
                            <button className="btn icon-btn">
                                <img src="../images/instgram.png" alt="Instagram" className="icon" draggable={false}/>
                            </button>
                            
                            <button className="btn icon-btn">
                                <img src="../images/tiktok.png" alt="TikTok" className="icon" draggable={false}/>
                            </button>
                        </div>
                    </div>
                    
                    <img src="../images/pastaefork.png" alt="Deuxième" draggable={false} className="second-image"/>
                    
                </div>
                
                <div className="image-wrapper first-image">
                    <img src="../images/Mint.png" alt="Première" draggable={false}/>
                </div>
            </div>
        </div>
    )

}
export default Banner;