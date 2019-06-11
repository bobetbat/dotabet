import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';

import store from './store';
import AppNavbar from './components/AppNavbar';
import UserDataInput from './components/Table';
import ChallengeModal from './components/ChallengeModal';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <AppNavbar />
          <ChallengeModal />
          <Container className='row-like'>
              <UserDataInput />
              <UserDataInput />
          </Container>
        </div>
      </Provider>
    );
  }  
}

export default App;
