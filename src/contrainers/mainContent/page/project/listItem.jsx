import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 리스트형식 아이템
class ListItem extends React.Component {
  render() {
    const {
      id,
      icon,
      title,
      toggleExpansionItem,
    } = this.props;
    return (
      <div
        className="list-item"
        role="presentation"
        onClick={() => toggleExpansionItem(id)}
      >
        <div> {/* 이미지 */}
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>{  /* 타이틀 */  }
          <span>{title}</span>
        </div>
      </div>
    )
  }
}

export default ListItem;