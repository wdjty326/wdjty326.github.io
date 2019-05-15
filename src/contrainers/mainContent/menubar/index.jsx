// 좌측 메뉴바
import React from 'react';
import { connect } from 'react-redux';
import MenuItem from './menuItem';
import './menubar.scss';

const mapStateToProps = state => state.common;

class Menubar extends React.Component {
  constructor(props){
    super(props); // this.props 를 초기화 하기 위함 (React.Component에게 props를 주는 2U)
  }

  render() {
    const { menuList } = this.props;
    const { pathname } = this.props.location;
    return (
      <div className="MainMenubar">
        <ul>
          {
            menuList.map((menuInfo, idx) => <MenuItem
              key={idx}
              {...menuInfo}
              active={pathname === menuInfo.link}
              />)
          }
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Menubar);