/**
 * 메인화면 헤더 부분
 */
import React, { PureComponent } from 'react';
import MainHeaderProfile from './profile';
import MainHeaderTitle from './title';
import '../../resources/mainHeader/styles/mainHeader.scss';

class MainHeader extends PureComponent {
  render() {
    return (
      <header id="MainHeader">
        <div className="content">
          <MainHeaderProfile />
          <MainHeaderTitle />
        </div>
      </header>
    );
  }
}

export default MainHeader;
