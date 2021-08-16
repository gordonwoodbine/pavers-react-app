//import { useState } from 'react';
import Header from './components/Header';
import ContactFrom from './components/ContactForm';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='main-content'>
        <h2>Pavers React Developer Application Form</h2>
        <ContactFrom />
      </main>
    </div>
  );
};

export default App;
