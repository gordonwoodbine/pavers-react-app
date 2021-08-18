import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormImageUpload from './FormImageUpload';

const ContactForm = () => {
  const history = useHistory();

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

  /*
    Again, I know lodash has a unique id function but I didn't want to import it just for that. So I stole this function that I found on the internet. 
  */
  const uniqueId = (function () {
    let num = 0;
    return function (prefix) {
      prefix = String(prefix) || '';
      num += 1;
      return prefix + num;
    };
  })();

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

    //console.log(applicant);

    axios.post(url, applicant).then((res) => {
      if (res.status === 200) {
        history.push('/success');
      } else {
        history.push('/error');
      }
    });
  };

  const showPreview = (e) => {
    if (e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      let preview = document.getElementById('file-img-preview');
      preview.src = src;
      setImageFile(src);

      /* I was trying to convert the image into base64 and send it to the server but this gave me a CORS error. While I'm pretty confident that, given time, I could resolve this, I decided, for now, to focus on other things. */

      // const file = e.target.files[0];
      // const reader = new FileReader();
      // reader.onloadend = function () {
      //   setImageFile(reader.result);
      // };
      // reader.readAsDataURL(file);
    }
  };

  return (
    <div className='contact-form'>
      <form onSubmit={(e) => formSubmit(e)} encType='multipart/form-data'>
        <FormInput
          id={uniqueId('id_')}
          label='* Name:'
          type='text'
          placeholder='John Doe'
          maxLength='50'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
        />

        <FormInput
          id={uniqueId('id_')}
          label='* Email Address:'
          type='email'
          placeholder='john.doe@pavers.co.uk'
          maxLength='50'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />

        <FormInput
          id={uniqueId('id_')}
          label='* Application Date'
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required={true}
        />

        <FormTextArea
          id={uniqueId('id_')}
          label='* About You:'
          value={aboutYou}
          onChange={(e) => setAboutYou(e.target.value)}
          placeholder='Tell us a little bit about yourself...'
          required={true}
          maxLength='255'
        />

        <FormTextArea
          id={uniqueId('id_')}
          label='* Reason for Applying:'
          value={reasonForApp}
          onChange={(e) => setReasonForApp(e.target.value)}
          placeholder='What made you want to apply for this job?'
          required={true}
          maxLength='255'
        />

        <FormTextArea
          id={uniqueId('id_')}
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
          src='assets/default.jpg'
          alt='profile preview'
          type='file'
          inputId='profile-img'
          onChange={(e) => showPreview(e)}
        />

        <button className='btn submit-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
