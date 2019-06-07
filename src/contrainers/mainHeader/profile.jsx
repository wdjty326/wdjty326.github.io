/**
 * 메인헤더 프로필
 */
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../../resources/mainHeader/styles/profile.scss';

const Button = ({ link, children }) => (
  <button type="button" className="BrandButton">
    <a href={link}>
      {children}
    </a>
  </button>
);

Button.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  link: '',
  children: <div />,
};

class MainHeaderProfile extends PureComponent {
  render() {
    return (
      <div className="profile">
        {/* 프로필 */}
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
