import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../resources/mainContent/styles/Frame.css';

class Frame extends React.Component {
  render() {
    return (
      <Router>
        <div className="frame">
        </div>
      </Router>
    );
  }
}

export default Frame;