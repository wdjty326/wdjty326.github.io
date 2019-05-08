/**
 * 메인헤더 프로필
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../resources/mainHeader/styles/profile.css'

const Button = ({ link, children }) => (
  <div className="BrandButton">
    <a href={link}>
      {children}
    </a>
  </div>
);

class MainHeaderProfile extends React.Component {
  render() {
    return (
      <div className="Profile"> {/* 프로필 */}
        <div className="Info">
          <div className="Image" />
          <div className="Text">
            <p>Jeong TaekYu</p>
            <p>FrontEnd Developer</p>
          </div>
        </div>
        <div className="Buttons">
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