// 좌측 메뉴바
import React from 'react';
import { connect } from 'react-redux';
import MenuItem from './menuItem';
import './menubar.scss';

const mapStateToProps = state => state.common;
class Menubar extends React.Component {
  constructor(props){
    super(props); // this.props 를 초기화 하기 위함 (React.Component에게 props를 주는 2U)
    this.state = {
      activeMenuId: '',
    };

    this.toggleChangeMenu = this.toggleChangeMenu.bind(this);
  }

  toggleChangeMenu(menuId) {
    this.setState({
      activeMenuId: menuId,
    })
  }

  render() {
    const { menuList } = this.props;
    const { activeMenuId } = this.state;
    return (
      <div className="MainMenubar">
        <ul>
          {
            menuList.map((menuInfo, idx) => <MenuItem
              key={idx}
              {...menuInfo}
              active={!(activeMenuId) && menuInfo.active || (activeMenuId === menuInfo.id)}
              toggleChangeMenu={this.toggleChangeMenu}
              />)
          }
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Menubar);