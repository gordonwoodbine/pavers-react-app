import React, { useState } from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormImageUpload from './FormImageUpload';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(dateFormatter(new Date()));
  const [aboutYou, setAboutYou] = useState('');
  const [reasonForApp, setReasonForApp] = useState('');
  const [paversKnowledge, setPaversKnowledge] = useState('');
  const [imageFile, setImageFile] = useState('');
  const url = 'https://staging.interview-api.paversdev.co.uk/upload';

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

    axios.post(url, applicant).then((res) => console.log(res));
  };

  const showPreview = (e) => {
    if (e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      let preview = document.getElementById('file-img-preview');
      preview.src = src;
      //setImageFile(src);

      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = function () {
        setImageFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
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

        <FormImageUpload
          label='Upload a Picture:'
          imgId='file-img-preview'
          src='assets/default2.png'
          alt='profile picture'
          type='file'
          inputId='file-ip'
          onChange={(e) => showPreview(e)}
        />

        {/* <div className='form-group'>
          <label>Upload a Picture:</label>

          <div className='form-input'>
            <label htmlFor='file-ip'>
              <img
                id='file-img-preview'
                src='assets/default2.png'
                alt='profile'
              />
            </label>
            <input
              type='file'
              id='file-ip'
              accept='image/*'
              onChange={(e) => showPreview(e)}
            />
          </div>
        </div> */}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
