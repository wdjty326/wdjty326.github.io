/**
 * 메인헤더 프로필
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../../resources/mainHeader/styles/profile.css'

const Button = ({ children }) => (
  <div className="BrandButton">
    {children}
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
          <Button>
            <FontAwesomeIcon icon={faFacebookF} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faGithub} />
          </Button>
        </div>
      </div>
    );
  }
}

export default MainHeaderProfile;