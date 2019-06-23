import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';

import store from './store';
import AppNavbar from './components/AppNavbar';
import Tables from './components/Tables';
import ChallengeModal from './components/ChallengeModal';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppFooter from './components/AppFooter';


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <AppNavbar />
          <Container className="main-container">
            <ChallengeModal />
            <Container className='row-like'>
                <Tables />
                <Tables />
            </Container>
          </Container>
          <AppFooter />
        </div>
      </Provider>
    );
  }  
}

export default App;
