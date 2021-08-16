//import { useState } from 'react';
import Header from './components/Header';
import ContactFrom from './components/ContactForm';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='main-content'>
        <h2>Pavers React Developer Application Form</h2>
        <p>
          Please fill in the form below. Note, any fields marked with an * are
          required. Good luck in your application!
        </p>
        <ContactFrom />
      </main>
    </div>
  );
};

export default App;
