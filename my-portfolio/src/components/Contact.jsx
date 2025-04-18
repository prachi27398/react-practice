import React, { useState } from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = e => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
          setError(true);
          return;
        }

        emailjs.send(
          'service_id',       
          'template_id',      
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            date: new Date().toLocaleString(),
          },
          'public_key'        
        ).then(() => {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setError(false);
        })
        .catch(err => {
          console.error('Failed to send message:', err);
          setError(true);
        });

        alert('Form submitted!');
        console.log(formData);
      };

  return (
    <div className="contact-wrapper">
      <h2>Contact Me</h2>
      {submitted && <p className="success-msg">✅ Message sent successfully!</p>}
      {error && <p className="error-msg">❌ Please fill all fields or try again.</p>}

    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="email" placeholder="Email"  value={formData.email} onChange={handleChange} />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
      <button type="submit">Send Message</button>
    </form>
    </div>
  )
}

export default Contact
