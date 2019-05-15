// 메뉴 아이템 정보
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class MenuItem extends React.Component {
  render() {
    const { id, icon, text, link, exact, active } = this.props;
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
    )
  }
}

export default MenuItem;