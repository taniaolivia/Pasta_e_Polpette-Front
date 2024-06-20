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
    const openUberEats= () => {
        window.open("https://www.ubereats.com/fr/store/pasta-e-polpette/q7J4GZ6zSkabzhJc0CMoFQ", "_blank");
      }

    useEffect(()=>{
        const fetchData = async () =>{
            const data = await getRestaurantSectionData();

            if(data ){
                setRestaurant(data.restaurant[0])
                
            }
        };

        fetchData();
    },[]);

    if(!restaurant){
        return<div>Loading...</div>
    }
    const { title, address, access,schedule, latitude, langitude } = restaurant;
    const position = [latitude, langitude];  

    return (
        <div className="restaurant">
            <img src="../images/rest.png" alt="" className="restaurant--rest" />

            <div className="restaurant--text">
                <h1 className="restaurant--title">Notre &#160;<span className="red">Restaurant</span></h1>
            </div>
            <div>
                <img src="../images/fleur.png" alt="" className="restaurant--fleur" />
            </div>
            <div>
                <img src="../images/boulle.png" alt="" className="restaurant--boulle" />
            </div>

            <div className='desktop'>
                <div className="contact--contents">
                    <div className="contact--content left">
                        <div className="map-container">
                            <MapContainer center={position} zoom={10} style={{ height: "300px", width: "100%" }}>
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

                    <div className="contact--content right">
                        <p className="restaurant--title">{title}</p>

                        <div className="contact--content--info">
                            <div className="tel contact--icon--text">
                                <p>{address}</p>
                            </div>
                        </div>

                        <div className="contact--content--info">
                            <div className="email contact--icon--text">{access}</div>
                        </div>

                        <div className="contact--content--info">
                            <div className="tel contact--icon--text">
                                <p>{schedule}</p>
                            </div>
                        </div>

                        <div className="contact--content--info socialMedia">
                            <div className="order-button">
                                <button  onClick={openUberEats}>Commander</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="../images/rosemary.png" alt="" className="restaurant--rosemary" />
                    </div>
                </div>
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

                <div className="contact--content right">
                    <p className="restaurant--title">Paste e Polpette Paris</p>

                    <div className="contact--content--info">
                        <div >
                            <p>{address}</p>
                        </div>
                    </div>

                    <div >
                        <div className="email contact--icon--text">{access}</div>
                    </div>

                    <div className="contact--content--info">
                        <div >
                            <p>{schedule}</p>
                        </div>
                    </div>

                    <div>
                        <img src="../images/boulle.png" alt="" className='bl' />
                    </div>

                    <div >
                        <div className="order-button">
                            <button  onClick={openUberEats}>Commander</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Restaurant;
