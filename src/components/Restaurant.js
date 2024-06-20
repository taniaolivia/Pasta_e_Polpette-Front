import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getRestaurantSectionData } from '../services/Restaurant';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';



const defaultIcon = new L.Icon({
    iconUrl: "../../images/marker-icon.png",
    shadowUrl: "../../images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function Restaurant({dashboard}) {

    const [restaurant, setRestaurant] = useState(null);
    const openUberEats = () => {
        window.open("https://www.ubereats.com/fr/store/pasta-e-polpette/q7J4GZ6zSkabzhJc0CMoFQ", "_blank");
    }

    const openAvis = () => {
        window.open("https://www.google.com/maps/place/Pasta%26polpette/@48.8626742,2.3705276,17z/data=!4m17!1m8!3m7!1s0x47e66d0038b1bb4d:0x179d645f9e3fa9f9!2sPasta%26polpette!8m2!3d48.8626742!4d2.3727163!10e4!16s%2Fg%2F11vzcmhtmc!3m7!1s0x47e66d0038b1bb4d:0x179d645f9e3fa9f9!8m2!3d48.8626742!4d2.3727163!9m1!1b1!16s%2Fg%2F11vzcmhtmc?entry=ttu");
    }

        useEffect(() => {
            const fetchData = async () => {
                const data = await getRestaurantSectionData();

                if (data) {
                    setRestaurant(data.restaurant[0])

                }
            };

            fetchData();
        }, []);

    if (!restaurant) {
        return <div>Loading...</div>
    }
    const { title, name, address, access, schedule, latitude, langitude } = restaurant;
    const position = [latitude, langitude];

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
                                        {title} <br /> {address}
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
                                {title} <br /> {address}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

                <div className="restaurant--content right">
                    <p className="restaurant--title">Paste e Polpette Paris</p>

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
            </div>
            <img src="../images/rosemary.png" alt="" className="restaurant--rosemary" />

        </div>
    );
}

export default Restaurant;
