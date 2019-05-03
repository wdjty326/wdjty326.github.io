import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
        </Provider>
      </Router>
    )
  }
}

export default Main;