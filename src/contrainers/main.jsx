import React, { PureComponent } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainHeader from './mainHeader';
import MainNav from './mainNav';
import MainContent from './mainContent';
import store from '../store';

class Main extends PureComponent {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Route render={({ location }) => (
            <React.Fragment>
              <MainHeader />
              <MainNav
                location={location}
              />
              <MainContent
                location={location}
              />
            </React.Fragment>
          )}
          />
        </Provider>
      </Router>
    );
  }
}

export default Main;
