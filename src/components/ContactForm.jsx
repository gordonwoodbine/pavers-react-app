import React, { useState } from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
//import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(dateFormatter(new Date()));
  const [aboutYou, setAboutYou] = useState('');
  const [reasonForApp, setReasonForApp] = useState('');
  const [paversKnowledge, setPaversKnowledge] = useState('');
  const [imageFile, setImageFile] = useState(null);
  //const url = 'https://staging.interview-api.paversdev.co.uk/upload';

  /* 
    Yes, I know this is a hack but I didn't want to import moment.js just to do this one thing... 
  */
  function dateFormatter(date) {
    return date
      .toLocaleDateString()
      .replaceAll('/', '-')
      .split('-')
      .reverse()
      .join('-');
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const applicant = {
      applicantName: name,
      applicantEmail: email,
      dateOfApplication: date,
      aboutYou: aboutYou,
      reasonForApplying: reasonForApp,
      whatYouKnowAboutPavers: paversKnowledge,
      file: imageFile,
    };

    console.log(applicant);
    console.log(typeof applicant.file);

    //axios.post(url, applicant).then((res) => console.log(res));
  };

  return (
    <div className='contact-form'>
      <form onSubmit={(e) => formSubmit(e)} encType='multipart/form-data'>
        <FormInput
          label='* Name:'
          type='text'
          placeholder='John Doe'
          maxLength='50'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
        />

        <FormInput
          label='* Email Address:'
          type='email'
          placeholder='john.doe@pavers.co.uk'
          maxLength='50'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />

        <FormInput
          label='* Application Date'
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required={true}
        />

        <FormTextArea
          label='* About You:'
          value={aboutYou}
          onChange={(e) => setAboutYou(e.target.value)}
          placeholder='Tell us a little bit about yourself...'
          required={true}
          maxLength='255'
        />

        <FormTextArea
          label='* Reason for Applying:'
          value={reasonForApp}
          onChange={(e) => setReasonForApp(e.target.value)}
          placeholder='What made you want to apply for this job?'
          required={true}
          maxLength='255'
        />

        <FormTextArea
          label='* What You Know About Pavers:'
          value={paversKnowledge}
          onChange={(e) => setPaversKnowledge(e.target.value)}
          placeholder='What do you already know about the company?'
          required={true}
          maxLength='255'
        />

        <div className='form-group'>
          <label>Upload Picture</label>
          <input
            id='file'
            type='file'
            accept='image/*'
            onChange={(e) =>
              setImageFile(
                URL.createObjectURL(document.getElementById('file').files[0])
              )
            }
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
