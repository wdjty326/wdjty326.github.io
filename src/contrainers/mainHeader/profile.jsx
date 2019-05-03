/**
 * 메인헤더 프로필
 */
import React from 'react';
import '../../resources/mainHeader/styles/profile.css'

class MainHeaderProfile extends React.Component {
  render() {
    return (
      <div className="Profile"> {/* 프로필 */}
        <div className="Image"></div>
        <div className="Text">
          <p>Jeong TaekYu</p>
          <p>FrontEnd Developer</p>
        </div>
        <div className="Buttons">
        </div>
      </div>
    );
  }
}

export default MainHeaderProfile;