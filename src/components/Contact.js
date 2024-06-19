import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: undefined,
    subject: "",
    message: ""
  })
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  function sendForm() {
    console.log(form)
  }

  
  return (
    <div className="contact">

      <h1 className="contact--title">Contact</h1>

      <div className='desktop'>
        <div className="contact--contents">
          <div className="contact--content left">
            <p className="contact--content--title">Informations</p>
            <p className="contact--content--description">Vous avez une question ? <br/>On est là pour y répondre</p>
        
            <div className="contact--content--info">
              <img src="../../images/tel.png" alt="Téléphone" className="contact--icon"/>
              <div className="tel contact--icon--text">+1012 3456 789</div>
            </div>

            <div className="contact--content--info">
              <img src="../../images/email.png" alt="Mail" className="contact--icon"/>
              <div className="email contact--icon--text">contact@pastaepolpette.com</div>
            </div>

            <div className="contact--content--info">
              <img src="../../images/position.png" alt="Adresse" className="contact--icon"/>
              <div className="address contact--icon--text">90 boulevard Richard-Lenoir, 75011 Paris</div>
            </div>

            <div className="contact--content--info socialMedia">
              <a href='https://www.instagram.com/pastaepolpette_fr/' target='_blank' rel="noreferrer">
                <img src="../../images/instagram.png" alt="Instagram" className="contact--icon instagram"/>
              </a>

              <a href='https://www.instagram.com/pastaepolpette_fr/' target='_blank' rel="noreferrer">
                <img src="../../images/tiktok.png" alt="Tiktok" className="contact--icon"/>
              </a>
            </div>
          </div>

          <div className="contact--content right">
              <div className="inputs">
                <div className="input">
                  <label>Prénom</label>
                  <input type="text" name="firstName" value={form.firstName} onChange={handleChange}></input>
                </div>
                
                <div className="input input-nomargin">
                  <label>Nom</label>
                  <input type="text" name="lastName" value={form.lastName} onChange={handleChange}></input>
                </div>
              </div>

              <div className="inputs">
                <div className="input">
                  <label>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}></input>
                </div>
                
                <div className="input input-nomargin">
                  <label>Numéro de téléphone</label>
                  <input type="tel" name="telephone" placeholder="+33680201422" value={form.telephone} onChange={handleChange}></input>
                </div>
              </div>
            
              <div className="input">
                <label>Object</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange}></input>
              </div>
              <div className="input">
                <label>Message</label>
                <input type="text" name="message" value={form.message} onChange={handleChange}></input>
              </div>
              
              <div className='confirm-container'>
                <button className="confirm" onClick={sendForm}>Confirmer</button>
              </div>
          </div>
        </div>
      </div>

      <div className='mobile'>
          <div className="contact--content">
            <p className="contact--content--title">Informations</p>
            <p className="contact--content--description">Vous avez une question ? <br/>On est là pour y répondre</p>

            <div className="inputs">
                <div className="input">
                  <label>Prénom</label>
                  <input type="text" name="firstName" value={form.firstName} onChange={handleChange}></input>
                </div>
                
                <div className="input input-nomargin">
                  <label>Nom</label>
                  <input type="text" name="lastName" value={form.lastName} onChange={handleChange}></input>
                </div>
              </div>

              <div className="inputs">
                <div className="input">
                  <label>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}></input>
                </div>
                
                <div className="input input-nomargin">
                  <label>Numéro de téléphone</label>
                  <input type="tel" name="telephone" placeholder="+33680201422" value={form.telephone} onChange={handleChange}></input>
                </div>
              </div>
            
              <div className="input">
                <label>Object</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange}></input>
              </div>
              <div className="input">
                <label>Message</label>
                <input type="text" name="message" value={form.message} onChange={handleChange}></input>
              </div>
              
              <div className='confirm-container'>
                <button className="confirm" onClick={sendForm}>Confirmer</button>
              </div>

              <div className="contact--content--info">
                <img src="../../images/tel-black.png" alt="Téléphone" className="contact--icon"/>
                <div className="tel contact--icon--text">+1012 3456 789</div>
              </div>

              <div className="contact--content--info">
                <img src="../../images/email-black.png" alt="Mail" className="contact--icon"/>
                <div className="email contact--icon--text">contact@pastaepolpette.com</div>
              </div>

              <div className='contact--row'>
                <div className="contact--content--info">
                  <img src="../../images/position-black.png" alt="Adresse" className="contact--icon"/>
                  <div className="address contact--icon--text">90 boulevard Richard-Lenoir, 75011 Paris</div>
                </div>

                <div className="contact--content--info socialMedia">
                  <a href='https://www.instagram.com/pastaepolpette_fr/' target='_blank' rel="noreferrer">
                    <img src="../../images/instagram-red.png" alt="Instagram" className="contact--icon instagram"/>
                  </a>
                </div>
              </div>
          </div>

      </div>
    </div>
  );
}

export default Contact;
