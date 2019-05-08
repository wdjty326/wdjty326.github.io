// 좌측 메뉴바
import React from 'react';
import { connect } from 'react-redux';
import { getMenuList } from '../../../store/actions/commonAction';
import MenuItem from './menuItem';

const mapStateToProps = state => state.common;
const mapDispatchToProps = (dispatch) => ({
  getMenuList:() => dispatch(getMenuList()),
});

class Menubar extends React.Component {
  constructor(props){
    super(props); // this.props 를 초기화 하기 위함 (React.Component에게 props를 주는 2U)
    props.getMenuList();
  }

  render() {
    const { menuList } = this.props;
    console.log(menuList);
    return (
      <div className="MainMenubar">
        <ul>
          {
            menuList.map((menuInfo, idx) => <MenuItem key={idx} {...menuInfo} />)
          }
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);