import React, { useState, useEffect } from 'react';
import { getContactSectionData, sendEmail, updateContactSectionData } from '../services/Contact';
import { useSelector } from 'react-redux';

function Contact({dashboard}) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    subject: "",
    message: ""
  })
  const [popup, setPopup] = useState(false);
  const [formEdit, setFormEdit] = useState({
    title: "",
    description: "",
    telephone: "",
    email: "",
    address: "",
    instagram: "",
    tiktok: "",
  })
  const token = useSelector((state) => state.auth.token);

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

  const handleChangeEdit = (e) => {
    setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
  };

  const openPopup = () => {
    setPopup(true);
    setFormEdit({
      title: contact.title,
      description: contact.description,
      telephone: contact.telephone,
      email: contact.email,
      address: contact.address,
      instagram: contact.instagram,
      tiktok: contact.tiktok
    })
  }

  const editData = async () => {
    try {
      await updateContactSectionData(formEdit, token);
      const data = await getContactSectionData();

      setContact(data.contact[0]);
      setPopup(false);
    } 
    catch (error) {
      console.error("Failed to update contact section data:", error);
    }
  }

  const closePopup = () => {
    if(popup === true) {
      setPopup(false)
    } 
    else {
      setPopup(true)
    }
  }


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

              {dashboard && (
                  <img src="../images/edit.png" alt="Modifier" className='edit' onClick={openPopup}/>
              )}

              {dashboard && popup && (
                  <div className='popup'>

                    <div className='popup--content'>
                      <img src="../images/close.png" alt="Fermer" onClick={closePopup} className='popup--close'/>

                      <h1 className='popup--title'>Contact</h1>
                      <div className='input'>
                        <label>Titre</label>
                        <input type="text" name="title" value={formEdit.title} onChange={handleChangeEdit}></input>
                      </div>

                      <div className='input'>
                        <label>Description</label>
                        <textarea type="text" name="description" value={formEdit.description} onChange={handleChangeEdit} className='textarea'></textarea>
                      </div>

                      <div className='input'>
                        <label>Téléphone</label>
                        <input type="tel" name="telephone" value={formEdit.telephone} onChange={handleChangeEdit}></input>
                      </div>

                      <div className='input'>
                        <label>E-mail</label>
                        <input type="email" name="email" value={formEdit.email} onChange={handleChangeEdit}></input>
                      </div>

                      <div className='input'>
                        <label>Adresse</label>
                        <input type="text" name="address" value={formEdit.address} onChange={handleChangeEdit}></input>
                      </div>

                      <div className='input'>
                        <label>Lien d'Instagram</label>
                        <input type="text" name="instagram" value={formEdit.instagram} onChange={handleChangeEdit}></input>
                      </div>

                      <div className='input'>
                        <label>Lien de Tiktok</label>
                        <input type="text" name="tiktok" value={formEdit.tiktok} onChange={handleChangeEdit}></input>
                      </div>

                      <button className='popup--btn' onClick={editData}>Valider</button>
                    </div>
                  </div>
              )}
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

                {dashboard && (
                  <img src="../images/edit.png" alt="Modifier" className='edit edit--contact' onClick={openPopup}/>
                )}

                {dashboard && popup && (
                    <div className='popup'>

                      <div className='popup--content'>
                        <img src="../images/close.png" alt="Fermer" onClick={closePopup} className='popup--close'/>

                        <h1 className='popup--title'>Contact</h1>
                        <div className='input'>
                          <label>Titre</label>
                          <input type="text" name="title" value={formEdit.title} onChange={handleChangeEdit}></input>
                        </div>

                        <div className='input'>
                          <label>Description</label>
                          <textarea type="text" name="description" value={formEdit.description} onChange={handleChangeEdit} className='textarea'></textarea>
                        </div>

                        <div className='input'>
                          <label>Téléphone</label>
                          <input type="tel" name="telephone" value={formEdit.telephone} onChange={handleChangeEdit}></input>
                        </div>

                        <div className='input'>
                          <label>E-mail</label>
                          <input type="email" name="email" value={formEdit.email} onChange={handleChangeEdit}></input>
                        </div>

                        <div className='input'>
                          <label>Adresse</label>
                          <input type="text" name="address" value={formEdit.address} onChange={handleChangeEdit}></input>
                        </div>

                        <div className='input'>
                          <label>Lien d'Instagram</label>
                          <input type="text" name="instagram" value={formEdit.instagram} onChange={handleChangeEdit}></input>
                        </div>

                        <div className='input'>
                          <label>Lien de Tiktok</label>
                          <input type="text" name="tiktok" value={formEdit.tiktok} onChange={handleChangeEdit}></input>
                        </div>

                        <button className='popup--btn' onClick={editData}>Valider</button>
                      </div>
                    </div>
                )}
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
