// 메인 컨텐트
import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { getMenuList } from '../../store/actions/commonAction';
import Menubar from './menubar';
import Frame from './frame';
import '../../resources/mainContent/styles/mainContent.scss';

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
      <Router>
        <Route render={({location, history, match}) => (
          <div className="MainContent">
            <Menubar
              location={location}
            />
            <Frame
              location={location}
              history={history}
              match={match}
            />
          </div>
        )} />
      </Router>
    )
  }
}

export default connect(null, mapDispatchToProps)(MainContent);