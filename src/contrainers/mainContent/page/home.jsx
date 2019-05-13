import React from 'react';
import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="content">
          <div className="progress" />
          <div className="title">
            <span className="prepend" />
            <span className="insert">
            WDJTY
            </span>
            <span className="append" />
          </div>
          <div className="footer">
            <span>I'm FrontEnd Developer</span>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;