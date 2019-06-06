import React, { PureComponent } from 'react';
import '../../../resources/mainContent/styles/page/home.scss';

class Home extends PureComponent {
  render() {
    return (
      <article className="home">
        <div className="progress" />
        <div className="title">
          <span className="prepend" />
          <span className="insert">
          WDJTY
          </span>
          <span className="append" />
        </div>
        <div className="footer">
          <span>I&#39;m FrontEnd Developer</span>
        </div>
      </article>
    );
  }
}

export default Home;
