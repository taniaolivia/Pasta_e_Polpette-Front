import React, { useState, useEffect } from 'react';
import { getContactSectionData, updateContactSectionData } from '../services/Contact';
import { getBannerSectionData, updateBannerSectionData } from '../services/Banner';
import { useSelector } from 'react-redux';

function Banner({ dashboard }) {
    const openUberEats = () => {
        window.open("https://www.ubereats.com/fr/store/pasta-e-polpette/q7J4GZ6zSkabzhJc0CMoFQ", "_blank");
    }

    const [contact, setContact] = useState(null);
    const [banner, setBanner] = useState(null);
    const [popupBanner, setPopupBanner] = useState(false);
    const [popupContact, setPopupContact] = useState(false);
    const [error, setError] = useState(null);
    
    const token = useSelector((state) => state.auth.token);

    const [formBanner, setFormBanner] = useState({

        description: ""
    })

    const [formContact, setFormContact] = useState({
        instagram: "",
        tiktok: ""
    })


    useEffect(() => {
        const fetchData = async () => {
            const data = await getContactSectionData();
            const dataBanner = await getBannerSectionData();

            if (data && dataBanner) {
                setContact(data.contact[0])
                setBanner(dataBanner.descriptions)
                setFormBanner({
                    description: dataBanner.descriptions || ''
                });
                setFormContact({
                    instagram: data.contact[0].instagram || '',
                    tiktok: data.contact[0].tiktok || ''
                });

            }
        };

        fetchData();
    }, []);

    const handleChangeBanner = (e) => {
        setFormBanner({ ...formBanner, [e.target.name]: e.target.value });
    };

    const handleChangeContact = (e) => {
        setFormContact({ ...formContact, [e.target.name]: e.target.value });
    };

    const openPopupBanner = () => {
        
        setPopupBanner(true);
        
    }

    const openPopupContact = () => {
        setPopupContact(true);
        
    }

    const handleSubmit = async () => {
        try {
            setError(null);
          

            const updatedData = await updateBannerSectionData(formBanner.description, token);
            const data = await getBannerSectionData();

            setBanner(data.descriptions);
            setPopupBanner(false);

          
        } catch (error) {
            setError('Une erreur est survenue lors de la mise à jour de la description.');
        }
    };

    const handleSubmitContact = async () => {
        try {
            setError(null);
          

            const updatedData = await updateContactSectionData(formContact, token);
            const data = await getContactSectionData();

            setContact(data.contact[0])
            setPopupContact(false);

           
        } catch (error) {
            setError('Une erreur est survenue lors de la mise à jour .');
        }
    };


    const closePopupBanner = () => {
        if (popupBanner === true) {
            setPopupBanner(false)
        }
        else {
            setPopupBanner(true)
        }
        setError(null);
       
    }

    const closePopupContact = () => {
        if (popupContact === true) {
            setPopupContact(false)
        }
        else {
            setPopupContact(true)
        }
        setError(null);
       
    }


    return (
        <div className="banner">
            <div className="image-container1">
                <div className="image-wrapper layer">
                    <img src="../images/tomate.png" alt="Tomate" draggable={false} />
                </div>
                <div className="image-wrapper orange desktop">
                    <img src="../images/Orange.png" alt="Orange" draggable={false} />
                </div>



                <div className="image-wrapper orange-mobile mobile">
                    <img src="../images/Orange.png" alt="Orange" draggable={false} />
                </div>
            </div>

            <div className="text-container">
                <div className="image-container2">
                    <div className="image-wrapper1 lovers">
                        <img src="../images/pasta.png" alt="Pasta lovers" draggable={false} />
                    </div>
                </div>

                <p>{banner}</p>

                <div className="desktop">
                    <div className="button-group">
                        <button className="btn discover-btn" onClick={openUberEats}>Découvrir</button>

                        {contact && (
                            <a href={contact.instagram} target='_blank' rel="noreferrer">
                                <button className="btn icon-btn">
                                    <img src="../images/instgram.png" alt="Instagram" className="icon" draggable={false} />
                                </button>
                            </a>
                        )}

                        {contact && (
                            contact.tiktok && (
                                <a href={contact.tiktok} target='_blank' rel="noreferrer">
                                    <button className="btn icon-btn">
                                        <img src="../images/tiktok.png" alt="TikTok" className="icon" draggable={false} />
                                    </button>
                                </a>
                            )
                        )}
                    </div>
                </div>

            </div>

            <div className="desktop">
                <div className="image-container ">
                    <img src="../images/pastaefork.png" alt="Deuxième" className="second-image" draggable={false} />

                    <div className="image-wrapper first-image">
                        <img src="../images/Mint.png" alt="Première" draggable={false} />
                    </div>
                </div>
            </div>

            <div className="mobile">
                <div className="image-container">
                    <div className="button-group">
                        <button className="btn discover-btn" onClick={openUberEats}>Découvrir</button>

                        <div className="btn-mob">
                            <button className="btn icon-btn">
                                <img src="../images/instgram.png" alt="Instagram" className="icon" draggable={false} />
                            </button>

                            <button className="btn icon-btn">
                                <img src="../images/tiktok.png" alt="TikTok" className="icon" draggable={false} />
                            </button>
                        </div>
                    </div>

                    <img src="../images/pastaefork.png" alt="Deuxième" draggable={false} className="second-image" />

                </div>

                <div className="image-wrapper first-image">
                    <img src="../images/Mint.png" alt="Première" draggable={false} />
                </div>
            </div>


            {dashboard && (
                <img src="../images/edit.png" alt="Modifier" className='editDes' onClick={openPopupBanner} />
            )}

            {dashboard && (
                <img src="../images/edit.png" alt="Modifier" className='editB' onClick={openPopupContact} />
            )}

            {dashboard && popupBanner && (
                <div className='popup'>

                    <div className='popup--content'>
                        <img src="../images/close.png" alt="Fermer" onClick={closePopupBanner} className='popup--close' />

                        <h1 className='popup--title'>Banner</h1>
                        <div className='input'>
                            <label>Description</label>
                            <input type="text" name="description" value={formBanner.description} onChange={handleChangeBanner}></input>
                        </div>

                        <button className='popup--btn' onClick={handleSubmit}  >Valider</button>

                        {error && <div className="error">{error}</div>}
                       
                    </div>
                </div>
            )}

            {dashboard && popupContact && (
                <div className='popup' >

                    <div className='popup--content'>
                        <img src="../images/close.png" alt="Fermer" onClick={closePopupContact} className='popup--close' />

                        <h1 className='popup--title'>Contact</h1>
                        <div className='input'>
                            <label>instagram</label>
                            <input type="text" name="instagram" value={formContact.instagram} onChange={handleChangeContact}></input>
                        </div>
                        <div className='input'>
                            <label>tiktok</label>
                            <input type="text" name="tiktok" value={formContact.tiktok} onChange={handleChangeContact}></input>
                        </div>

                        <button className='popup--btn' onClick={handleSubmitContact}  >Valider</button>
                        {error && <div className="error">{error}</div>}
                     
                    </div>
                </div>
            )}
        </div>
    )

}
export default Banner;