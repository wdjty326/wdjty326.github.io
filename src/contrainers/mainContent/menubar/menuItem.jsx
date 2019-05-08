// 메뉴 아이템 정보
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class MenuItem extends React.Component {
  render() {
    const { icon, text } = this.props;
    return (
      <li className="MenuItem">
        <FontAwesomeIcon icon={icon} />
        <span>
            {text}
        </span>
      </li>
    )
  }
}

export default MenuItem;