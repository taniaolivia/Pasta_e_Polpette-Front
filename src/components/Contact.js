import React, { useState, useEffect } from 'react';
import { getContactSectionData, sendEmail } from '../services/Contact';

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    subject: "",
    message: ""
  })
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = 'Prénom est requis';
    if (!form.lastName) newErrors.lastName = 'Nom est requis';
    if (!form.email) newErrors.email = 'E-mail est requis';
    if (!form.telephone) newErrors.telephone = 'Numéro de téléphone est requis';
    if (!form.subject) newErrors.subject = 'Objet est requis';
    if (!form.message) newErrors.message = 'Message est requis';
    setErrors(newErrors);

    console.log(errors)

    return Object.keys(newErrors).length === 0;
  };
  
  const sendForm = async () => {
    if (!validateForm()) return;

    const res = await sendEmail(form);

    if(res.message === 'Email sent successfully') {
      setForm({ 
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        subject: "",
        message: ""
      });
    }
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
    <div className="contact" id="contact">

      <h1 className="contact--title">Contact</h1>

      {contact && (
        <div className='desktop'>
          <div className="contact--contents">
            <div className="contact--content left">
              <p className="contact--content--title">{contact.title}</p>
              <p className="contact--content--description">{contact.description}</p>
          
              {contact.telephone && (
                <div className="contact--content--info">
                  <img src="../../images/tel.png" alt="Téléphone" className="contact--icon" draggable={false}/>
                  <div className="tel contact--icon--text">{contact.telephone}</div>
                </div>
              )}

              <div className="contact--content--info">
                <img src="../../images/email.png" alt="Mail" className="contact--icon" draggable={false}/>
                <div className="email contact--icon--text">{contact.email}</div>
              </div>

              <div className="contact--content--info">
                <img src="../../images/position.png" alt="Adresse" className="contact--icon" draggable={false}/>
                <div className="address contact--icon--text">{contact.address}</div>
              </div>

              <div className="contact--content--info socialMedia">
                <a href={contact.instagram} target='_blank' rel="noreferrer">
                  <img src="../../images/instagram.png" alt="Instagram" className="contact--icon instagram" draggable={false}/>
                </a>

                {contact.tiktok && (
                  <a href={contact.tiktok} target='_blank' rel="noreferrer">
                    <img src="../../images/tiktokRounded.png" alt="Tiktok" className="contact--icon" draggable={false}/>
                  </a>
                )}
              </div>
            </div>

            <div className="contact--content right">
                <div className="inputs">
                  <div className="input">
                    <label>Prénom*</label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required></input>
                    {errors && (
                      <span className='error-message'>{errors.firstName}</span>
                    )}
                  </div>
                  
                  <div className="input input-nomargin">
                    <label>Nom*</label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required></input>
                    {errors && (
                      <span className='error-message'>{errors.lastName}</span>
                    )}
                  </div>
                </div>

                <div className="inputs">
                  <div className="input">
                    <label>E-mail*</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required></input>
                    {errors && (
                      <span className='error-message'>{errors.email}</span>
                    )}
                  </div>
                  
                  <div className="input input-nomargin">
                    <label>Numéro de téléphone*</label>
                    <input type="tel" name="telephone" placeholder="+33680201422" value={form.telephone} onChange={handleChange} required></input>
                    {errors && (
                      <span className='error-message'>{errors.telephone}</span>
                    )}
                  </div>
                </div>
              
                <div className="input">
                  <label>Object*</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required></input>
                  {errors && (
                      <span className='error-message'>{errors.subject}</span>
                    )}
                </div>
                
                <div className="input">
                  <label>Message*</label>
                  <input type="text" name="message" value={form.message} onChange={handleChange} required></input>
                  {errors && (
                      <span className='error-message'>{errors.message}</span>
                    )}
                </div>
                
                <div className='confirm-container'>
                  <button className="confirm" onClick={sendForm}>Confirmer</button>
                </div>
            </div>
          </div>
        </div>
      )}

      {contact && (
        <div className='mobile'>
          <div className="contact--content">
            <p className="contact--content--title">{contact.title}</p>
            <p className="contact--content--description">{contact.description}</p>

            <div className="inputs">
                  <div className="input">
                    <label>Prénom*</label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required></input>
                    {errors && (
                      <span className='error-message'>{errors.firstName}</span>
                    )}
                  </div>
                  
                  <div className="input input-nomargin">
                    <label>Nom*</label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required></input>
                    {errors && (
                      <span className='error-message'>{errors.lastName}</span>
                    )}
                  </div>
                </div>

                <div className="inputs">
                  <div className="input">
                    <label>E-mail*</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required></input>
                    {errors && (
                      <span className='error-message'>{errors.email}</span>
                    )}
                  </div>
                  
                  <div className="input input-nomargin">
                    <label>Numéro de téléphone*</label>
                    <input type="tel" name="telephone" placeholder="+33680201422" value={form.telephone} onChange={handleChange} required></input>
                    {errors && (
                      <span className='error-message'>{errors.telephone}</span>
                    )}
                  </div>
                </div>
              
                <div className="input">
                  <label>Object*</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required></input>
                  {errors && (
                      <span className='error-message'>{errors.subject}</span>
                    )}
                </div>

                <div className="input">
                  <label>Message*</label>
                  <input type="text" name="message" value={form.message} onChange={handleChange} required></input>
                  {errors && (
                      <span className='error-message'>{errors.message}</span>
                    )}
                </div>
              
              <div className='confirm-container'>
                <button className="confirm" onClick={sendForm}>Confirmer</button>
              </div>

              {contact.telephone && (
                <div className="contact--content--info">
                  <img src="../../images/tel.png" alt="Téléphone" className="contact--icon" draggable={false}/>
                  <div className="tel contact--icon--text">{contact.telephone}</div>
                </div>
              )}

              <div className="contact--content--info">
                <img src="../../images/email-black.png" alt="Mail" className="contact--icon" draggable={false}/>
                <div className="email contact--icon--text">{contact.email}</div>
              </div>

              <div className='contact--row'>
                <div className="contact--content--info">
                  <img src="../../images/position-black.png" alt="Adresse" className="contact--icon" draggable={false}/>
                  <div className="address contact--icon--text">{contact.address}</div>
                </div>

                <div className="contact--content--info socialMedia">
                  <a href={contact.instagram} target='_blank' rel="noreferrer">
                    <img src="../../images/instagram-red.png" alt="Instagram" className="contact--icon instagram" draggable={false}/>
                  </a>

                  {contact.tiktok && (
                    <a href={contact.tiktok} target='_blank' rel="noreferrer">
                      <img src="../../images/tiktokRounded.png" alt="Tiktok" className="contact--icon" draggable={false}/>
                    </a>
                  )}
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
