import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getRestaurantSectionData, updateRestaurantSectionData } from '../services/Restaurant';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import { useSelector } from 'react-redux';



const defaultIcon = new L.Icon({
    iconUrl: "../../images/marker-icon.png",
    shadowUrl: "../../images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function Restaurant({ dashboard }) {

    const [restaurant, setRestaurant] = useState(null);
    const [popup, setPopup] = useState(false);
    const [error, setError] = useState(null);

    const token = useSelector((state) => state.auth.token);

    const [form, setForm] = useState({

        name: '',
        address: '',
        telephone: '',
        email: '',
        access: '',
        schedule: '',
        latitude: 0.0,
        longitude: 0.0
    })
    const openUberEats = () => {
        window.open("https://www.ubereats.com/fr/store/pasta-e-polpette/q7J4GZ6zSkabzhJc0CMoFQ", "_blank");
    }

    const openAvis = () => {
        window.open("https://g.page/r/CfmpP55fZJ0XEBE/review", "_blank");
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRestaurantSectionData();

            if (data) {
                setRestaurant(data.restaurant[0])
                setForm({
                    name: data.restaurant[0].name || '',
                    address: data.restaurant[0].address || '',
                    telephone: data.restaurant[0].telephone || '',
                    email: data.restaurant[0].email || '',
                    access: data.restaurant[0].access || '',
                    schedule: data.restaurant[0].schedule || '',
                    latitude: parseFloat(data.restaurant[0].latitude) || 0.0,
                    longitude: parseFloat(data.restaurant[0].langitude) || 0.0
                })

            }
        };

        fetchData();
    }, []);

    if (!restaurant) {
        return <div>Loading...</div>
    }
    const { name, title, address, access, schedule, latitude, langitude, telephone, email } = restaurant;
    const position = [latitude, langitude];


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const openPopup = () => {
        setPopup(true);
        setForm({
            name: restaurant.name,
            address: restaurant.address,
            telephone: restaurant.telephone,
            email: restaurant.email,
            access: restaurant.access,
            schedule: restaurant.schedule,
            latitude: restaurant.latitude,
            langitude: restaurant.langitude,

        })
    }

    const handleSubmit = async () => {
        try {
            setError(null);


            const updatedData = await updateRestaurantSectionData(form, token);
            const data = await getRestaurantSectionData();

            setRestaurant(data.restaurant[0])
            setPopup(false);


        } catch (error) {
            setError('Une erreur est survenue lors de la mise à jour .');
        }
    };

    const closePopup = () => {
        if (popup === true) {
            setPopup(false)
        }
        else {
            setPopup(true)
        }
    }


    return (
        <div className="restaurant" id="restaurant">
            <img src="../images/rest.png" alt="" className="restaurant--rest" />

            <div className="restaurant--text">
                <h1 className="restaurant--title">Notre &#160;<span className="red">Restaurant</span></h1>
            </div>
            <div>
                <img src="../images/fleur.png" alt="" className="restaurant--fleur" />
            </div>
            <div>
                <img src="../images/boulle.png" alt="" className="restaurant--boulle desktop" />
            </div>

            <div className='desktop'>
                <div className="restaurant--contents">
                    <div className="restaurant--content left">
                        <div className="map-container">
                            <MapContainer center={position} zoom={10} style={{ height: "500px", width: "500px" }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position} icon={defaultIcon} >
                                    <Popup>
                                        {name} <br /> {address}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>

                    <div className="restaurant--content right">
                        <p className="restaurant--title">{name}</p>

                        <div className="restaurant--content--info">
                            <div className="tel contact--icon--text">
                                <p>{address}</p>
                            </div>
                        </div>

                        <div className="restaurant--content--info">
                            <div className="email contact--icon--text">{access}</div>
                        </div>

                        <div className="restaurant--content--info">
                            <div className="tel contact--icon--text">
                                <p>{schedule}</p>
                            </div>
                        </div>

                        {telephone && (
                            <div className="restaurant--content--info">
                                <div className="tel contact--icon--text">
                                    {telephone}
                                </div>
                            </div>
                        )}

                        <div className="restaurant--content--info">
                            <div className="email contact--icon--text">
                                {email}
                            </div>
                        </div>

                        <div className="restaurant--content--info socialMedia">
                            <div className="order-button">
                                <button onClick={openUberEats}>Commander</button>
                            </div>

                            <div className="order-button">
                                <button onClick={openAvis}>Donner votre avis</button>
                            </div>
                        </div>
                    </div>
                </div>

                <img src="../images/rosemary.png" alt="" className="restaurant--rosemary" />

            </div>

            <div className='mobile'>
                <div className="map-container">
                    <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} icon={defaultIcon}>
                            <Popup>
                                {name} <br /> {address}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

                <div className="restaurant--content right">
                    <p className="restaurant--title">{name}</p>

                    <div className="restaurant--content--info">
                        <div >
                            <p>{address}</p>
                        </div>
                    </div>

                    <div >
                        <div className="email restaurant--icon--text">{access}</div>
                    </div>

                    <div className="restaurant--content--info">
                        <div >
                            <p>{schedule}</p>
                        </div>
                    </div>
                    {telephone && (
                        <div className="restaurant--content--info">
                            <div className="tel contact--icon--text">
                                {telephone}
                            </div>
                        </div>
                    )}

                    <div className="restaurant--content--info">
                        <div className="email contact--icon--text">
                            {email}
                        </div>
                    </div>

                    <div>
                        <img src="../images/boulle.png" alt="" className='bl' />
                    </div>

                    <div >
                        <div className="order-button">
                            <button onClick={openUberEats}>Commander</button>
                        </div>
                        <div className="order-button">
                            <button onClick={openAvis}>Donner votre avis</button>
                        </div>
                    </div>
                </div>
                {dashboard && (
                    <img src="../images/edit.png" alt="Modifier" className='editContact ' onClick={openPopup} />
                )}
            </div>

            {dashboard && (
                <div className='desktop'>                <img src="../images/edit.png" alt="Modifier" className='editContactDS ' onClick={openPopup} />
                </div>

            )}



            {dashboard && popup && (
                <div className='popup' >
                    <div className='popup--content'>
                        <img src="../images/close.png" alt="Fermer" onClick={closePopup} className='popup--close' />
                        <h1 className='popup--title'>Restaurant</h1>
                        <div className='input'>
                            <label>Titre</label>
                            <input type="text" name="name" value={form.name} onChange={handleChange}></input>
                        </div>
                        <div className='input'>
                            <label>Adresse</label>
                            <input type="text" name="address" value={form.address} onChange={handleChange}></input>
                        </div>
                        <div className='input'>
                            <label>Accès</label>
                            <input type="text" name="access" value={form.access} onChange={handleChange}></input>
                        </div>
                        <div className='input'>
                            <label>Horaire</label>
                            <input type="text" name="schedule" value={form.schedule} onChange={handleChange}></input>
                        </div>
                        <div className='input'>
                            <label>Telephone</label>
                            <input type="text" name="telephone" value={form.telephone} onChange={handleChange}></input>
                        </div>
                        <div className='input'>
                            <label>Email</label>
                            <input type="text" name="email" value={form.email} onChange={handleChange}></input>
                        </div>
                        <div className='input'>
                            <label>Latitude</label>
                            <input type="number" step="any" name="latitude" value={form.latitude} onChange={handleChange}></input> {/* Utilisez type="number" pour les champs de nombre */}
                        </div>
                        <div className='input'>
                            <label>Longitude</label>
                            <input type="number" step="any" name="langitude" value={form.langitude} onChange={handleChange}></input> {/* Utilisez type="number" pour les champs de nombre */}
                        </div>
                        <button className='popup--btn' onClick={handleSubmit}>Valider</button>
                        {error && <div className="error">{error}</div>}

                    </div>
                </div>
            )}
        </div>
    );
}

export default Restaurant;
