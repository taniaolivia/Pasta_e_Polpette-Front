import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';




function Restaurant() {
    const position = [48.861, 2.370]; // Coordonnées de 90 boulevard Richard-Lenoir, 75011 Paris, France

    return (
        <div className="restaurant">
            <img src="../images/rest.png" alt="" className="restaurant--rest" />

            <div className="restaurant--text">
                <h1 className="restaurant--title">Notre <span className="red">Restaurant</span></h1>
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
                                <Marker position={position}  >
                                    <Popup>
                                        Paste e Polpette Paris <br /> 90 boulevard Richard-Lenoir <br />75011 Paris, France
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>

                    <div className="contact--content right">
                        <p className="restaurant--title">Paste e Polpette Paris</p>

                        <div className="contact--content--info">
                            <div className="tel contact--icon--text">
                                <p>90 boulevard Richard-Lenoir <br />75011 Paris, France</p>
                            </div>
                        </div>

                        <div className="contact--content--info">
                            <div className="email contact--icon--text">Accès : Métro 3, 5 et 9</div>
                        </div>

                        <div className="contact--content--info">
                            <div className="tel contact--icon--text">
                                <p>Ouvert tous les jours de 12H à 17H <br />et de 19H à 23H</p>
                            </div>
                        </div>

                        <div className="contact--content--info socialMedia">
                            <div className="order-button">
                                <button>Commander</button>
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
                        <Marker position={position}>
                            <Popup>
                                Paste e Polpette Paris <br /> 90 boulevard Richard-Lenoir <br /> 75011 Paris, France
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

                <div className="contact--content right">
                    <p className="restaurant--title">Paste e Polpette Paris</p>

                    <div className="contact--content--info">
                        <div >
                            <p>90 boulevard Richard-Lenoir <br />75011 Paris, France</p>
                        </div>
                    </div>

                    <div >
                        <div className="email contact--icon--text">Accès : Métro 3, 5 et 9</div>
                    </div>

                    <div className="contact--content--info">
                        <div >
                            <p>Ouvert tous les jours de 12H à 17H <br />et de 19H à 23H</p>
                        </div>
                    </div>

                    <div>
                        <img src="../images/boulle.png" alt="" className='bl' />
                    </div>

                    <div >
                        <div className="order-button">
                            <button>Commander</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Restaurant;
