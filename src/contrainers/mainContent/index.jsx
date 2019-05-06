// 메인 컨텐트
import React from 'react';
import Menubar from './menubar';
import '../../resources/mainContent/styles/mainContent.css';
import '../../resources/mainContent/styles/Menubar.css';

class MainContent extends React.Component {
  render() {
    return (
      <div className="MainContent">
        <Menubar />
      </div>
    )
  }
}

export default MainContent;