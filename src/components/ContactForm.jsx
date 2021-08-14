import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const ContactForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='contact-form'>
      <form>
        <div className='form-group'>
          <label>Name:</label>
          <input
            type='text'
            placeholder='John Doe'
            maxlength='50'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label for='email'>Email Address:</label>
          <input
            type='email'
            placeholder='john.doe@pavers.co.uk'
            maxlength='100'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Application Date:</label>
          <input type='date' />
        </div>
        <div className='form-group'>
          <label>Upload Picture</label>
          <input type='file' />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
