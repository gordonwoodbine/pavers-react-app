//import { useState } from 'react';
import Header from './components/Header';
import ApplicationForm from './views/ApplicationForm';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='main-content'>
        <ApplicationForm />
      </main>
    </div>
  );
};

export default App;
