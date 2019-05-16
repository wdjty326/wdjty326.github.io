import React from 'react';
import ListItem from './listItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 그룹형식 아이템
class GroupItem extends React.Component {
  render() {
    const {
      icon,
      title,
      projects,
    } = this.props;
    return (
      <div className="group-item">
        <div>{/* 이미지 */}
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>{ /* 타이틀 */ }
          <span>{title}</span>
        </div>
        <div>
          {
            projects.map(project => <ListItem {...project} />)
          }
        </div>
      </div>
    )
  }
}

export default GroupItem;