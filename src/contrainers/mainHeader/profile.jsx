/**
 * 메인헤더 프로필
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../resources/mainHeader/styles/profile.scss'

const Button = ({ link, children }) => (
  <button className="BrandButton">
    <a href={link}>
      {children}
    </a>
  </button>
);

class MainHeaderProfile extends React.Component {
  render() {
    return (
      <div className="profile"> {/* 프로필 */}
        <div className="info">
          <div className="image" />
          <div className="text">
            <p>Jeong TaekYu</p>
            <p>FrontEnd Developer</p>
          </div>
        </div>
        <div className="buttons">
          <Button link="https://www.facebook.com/wdjty?ref=bookmarks">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </Button>
          <Button link="https://github.com/wdjty326">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </Button>
        </div>
      </div>
    );
  }
}

export default MainHeaderProfile;