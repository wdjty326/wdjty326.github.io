import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../../store/actions/commonAction';
import ListItem from './project/listItem';
import ExpansionItem from './project/expansionItem';
import GroupItem from './project/groupItem';
import './project.scss';

const mapStateToProps = state => state.common;
const mapDispathToProps = (dispatch) => ({
  getProjectList: () => dispatch(action.getProejctList()),
});

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expansionItemId: null,
    };

    props.getProjectList();
    this.toggleExpansionItem = this.toggleExpansionItem.bind(this);
  }

  toggleExpansionItem(itemId) {
    this.setState({
      expansionItemId: itemId,
    });
  }

  render() {
    const { projectList } = this.props;
    const { expansionItemId } = this.state;
    return (
      <div className="project">
        {/* 카드뷰 형식 개발 */}
        <div>
          {
            projectList.map(project => {
              const { groupid, id } = project;
              const itemId = groupid || id;
              return (groupid) ? 
                (
                <GroupItem
                  toggleExpansionItem={this.toggleExpansionItem}
                  expansionItemId={expansionItemId}
                  {...project}
                />
                ) 
                : (expansionItemId === itemId) ? 
                (
                <ExpansionItem
                  toggleExpansionItem={this.toggleExpansionItem}
                  {...project} 
                />
                ) : 
                (
                <ListItem
                  toggleExpansionItem={this.toggleExpansionItem}
                  {...project}
                />);
            })
          }
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispathToProps)(Project);