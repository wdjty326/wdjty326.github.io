/**
 * 메인화면 헤더 부분
 */
import React from 'react';
import MainHeaderProfile from './profile';
import MainHeaderTitle from './title';
import '../../resources/mainHeader/styles/mainHeader.css';

class MainHeader extends React.Component {
  render() {
    return (
      <div id="MainHeader"> {/* 메인 */}
        <div className="Content"> {/* 컨텐츠 */}
          <MainHeaderProfile />
          <MainHeaderTitle />
        </div>
      </div>
    );
  }
}

export default MainHeader;