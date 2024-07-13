import React, { useState } from 'react';

function ContactEmail() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mldrdbob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <div className="form-container px-10 py-5">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group text-sm sm:text-md lg:text-lg">
          <label htmlFor="name">Full Name</label>
          <input
            required
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-sm sm:text-md lg:text-lg">
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-sm sm:text-md lg:text-lg">
          <label htmlFor="message">How Can We Help You?</label>
          <textarea
            required
            cols="50"
            rows="10"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="form-submit-btn text-sm sm:text-lg lg:text-xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactEmail;
