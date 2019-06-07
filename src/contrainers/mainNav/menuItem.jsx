// 메뉴 아이템 정보
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class MenuItem extends PureComponent {
  render() {
    const {
      icon,
      text,
      link,
      exact,
      active,
    } = this.props;
    return (
      <li
        className={`MenuItem${(active) ? ' active' : ''}`}
      >
        <NavLink exact={(exact)} to={link}>
          <FontAwesomeIcon icon={icon} />
          <span>
            {text}
          </span>
        </NavLink>
      </li>
    );
  }
}

MenuItem.propTypes = {
  icon: PropTypes.objectOf(Object),
  text: PropTypes.string,
  link: PropTypes.string,
  exact: PropTypes.bool,
  active: PropTypes.bool,
};

MenuItem.defaultProps = {
  icon: null,
  text: '',
  link: '',
  exact: false,
  active: false,
};

export default MenuItem;
