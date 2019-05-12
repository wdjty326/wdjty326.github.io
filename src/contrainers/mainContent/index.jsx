// 메인 컨텐트
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { getMenuList } from '../../store/actions/commonAction';
import Menubar from './menubar';
import Frame from './frame';
import '../../resources/mainContent/styles/mainContent.css';
import '../../resources/mainContent/styles/Menubar.css';

const mapDispatchToProps = (dispatch) => ({
  getMenuList:() => dispatch(getMenuList()),
});

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    props.getMenuList();
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="MainContent">
          <Menubar />
          <Frame />
        </div>
      </Router>
    )
  }
}

export default connect(null, mapDispatchToProps)(MainContent);