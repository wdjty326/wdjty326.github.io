import React from 'react';
import ListItem from './listItem';
import ExpansitionItem from './expansionItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 그룹형식 아이템
class GroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expansitionItemId: null,
    };

    this.toggleExpansionItem = this.toggleExpansionItem.bind(this);
  }

  // project의 활성화 아이템이 group일때만 group내 아이템 활성화 처리
  componentWillReceiveProps(nextProps) {
    const { expansionItemId, groupid } = nextProps;
    if (expansionItemId !== groupid) {
      this.setState({
        expansitionItemId: null
      });
    }    
  }

  toggleExpansionItem(itemId) {
    this.setState({
      expansitionItemId: itemId
    });
  }

  render() {
    const {
      icon,
      title,
      projects,
      toggleExpansionItem,
      groupid,
    } = this.props;
    const { expansitionItemId } = this.state;
    return (
      <div
        className="group-item"
        role="presentation"
        onClick={() => toggleExpansionItem(groupid)}
      >
        <div>{/* 이미지 */}
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>{ /* 타이틀 */ }
          <span>{title}</span>
        </div>
        <div>
          {
            projects.map(project => {
              const { id } = project;
              return (
                (expansitionItemId === id) ? (
                  <ExpansitionItem
                    {...project}
                    toggleExpansionItem={this.toggleExpansionItem}
                  />
                ) : (
                  <ListItem
                    {...project}
                    toggleExpansionItem={this.toggleExpansionItem}
                  /> 
                )
              );
            })
          }
        </div>
      </div>
    )
  }
}

export default GroupItem;