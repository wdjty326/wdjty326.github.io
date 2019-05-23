import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListItem from './listItem';
import ExpansitionItem from './expansionItem';
// 그룹형식 아이템
class GroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expansionItemId: null,
    };

    this.toggleExpansionItem = this.toggleExpansionItem.bind(this);
  }

  // project의 활성화 아이템이 group일때만 group내 아이템 활성화 처리
  componentWillReceiveProps(nextProps) {
    const { expansionItemId, groupid } = nextProps;
    if (expansionItemId !== groupid) {
      this.setState({
        expansionItemId: null
      });
    }    
  }

  toggleExpansionItem(itemId) {
    this.setState({
      expansionItemId: itemId
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
    const { expansionItemId } = this.state;
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
              return (expansionItemId === id) ? (
                <ExpansitionItem
                  {...project}
                  toggleExpansionItem={this.toggleExpansionItem}
                />
              ) : (
                <ListItem
                  {...project}
                  toggleExpansionItem={this.toggleExpansionItem}
                /> 
              );
            })
          }
        </div>
      </div>
    )
  }
}

export default GroupItem;