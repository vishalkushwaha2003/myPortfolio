import React, { useState } from 'react';
import InputComponent from './InputComponent';
import MessageComponent from './MessageComponent';

function ContactForm() {
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
        body: JSON.stringify(formData),
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
    <form onSubmit={handleSubmit} className='col-span-12 row-span-1 grid sm:grid-cols-4 grid-cols-1 sm:grid-rows-3 grid-rows-4 sm:gap-1 gap-8 w-[80%] m-auto'>
      <div className='sm:col-span-2 col-span-1 sm:row-span-1 row-span-1 w-full h-full'>
        <InputComponent 
          myPlaceholder='Full Name' 
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className='sm:col-span-2 col-span-1 sm:row-span-1 row-span-1'>
        <InputComponent 
          myPlaceholder='Email Address'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='sm:col-span-4 col-span-1 sm:row-span-2 row-span-2 flex justify-center items-center'>
        <MessageComponent 
          name='message'
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div className='sm:col-span-4 col-span-1 sm:row-span-2 row-span-2 flex justify-center items-center'>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
