import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 리스트형식 아이템
class ListItem extends React.Component {
  render() {
    const {
      icon,
      title,
    } = this.props;
    return (
      <React.Fragment>
        <div> {/* 이미지 */}
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>{  /* 타이틀 */  }
          <span>{title}</span>
        </div>
      </React.Fragment>
    )
  }
}

export default ListItem;