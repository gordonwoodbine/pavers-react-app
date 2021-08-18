import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ApplicationForm from './views/ApplicationForm';
import Success from './views/Success';
import Error from './views/Error';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='main-content'>
        <Switch>
          <Route exact path='/'>
            <ApplicationForm />
          </Route>
          <Route path='/success'>
            <Success />
          </Route>
          <Route path='/error'>
            <Error />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
