// 좌측 메뉴바
import React from 'react';
import { connect } from 'react-redux';
import MenuItem from './menuItem';
import * as action from '../../../store/actions/commonAction';
import './menubar.scss';

const mapStateToProps = state => state.common;
const mapDispatchToProps = (dispath) => ({
  setActiveMenuId: (menuId) => dispath(action.setActiveMenuId(menuId)),
});
class Menubar extends React.Component {
  constructor(props){
    super(props); // this.props 를 초기화 하기 위함 (React.Component에게 props를 주는 2U)
  }

  render() {
    const { menuId, menuList, setActiveMenuId } = this.props;
    return (
      <div className="MainMenubar">
        <ul>
          {
            menuList.map((menuInfo, idx) => <MenuItem
              key={idx}
              {...menuInfo}
              active={!(menuId) && menuInfo.active || (menuId === menuInfo.id)}
              toggleChangeMenu={setActiveMenuId}
              />)
          }
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);