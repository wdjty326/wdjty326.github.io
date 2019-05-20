// 메인 컨텐트
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getMenuList } from '../../store/actions/commonAction';
import Page from './page';
import '../../resources/mainContent/styles/mainContent.scss';

const mapStateToProps = state => state.common;
const mapDispatchToProps = (dispatch) => ({
  getMenuList:() => dispatch(getMenuList()),
});

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
    };
    this.updateMenuList = this.updateMenuList.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.updateMenuList(nextProps);
  }

  updateMenuList(props) {
    const { menuList } = props;
    this.setState({
      menuList: menuList.map(menuInfo => ({
        ...menuInfo,
        ...{
          component: Page[menuInfo.id],
        }
      }))
    })
  }

  componentDidMount() {
    this.props.getMenuList();
  }

  componentDidUpdate() {
    const { menuList } = this.state;
    const { location } = this.props;

    const reversedMenu = menuList.filter(menuInfo => 
      menuInfo.link === location.pathname 
      && menuInfo.reversed);
    if (reversedMenu.length > 0) {
      document.body.style.backgroundColor = '#333333';
    } else {
      document.body.style.backgroundColor = '#ffffff';
    }
  }

  render() {
    const { menuList } = this.state;
    const { location } = this.props;
    return (
      <TransitionGroup
        id="MainContent"
        component="section"
      >
        <CSSTransition
          key={location.pathname}
          timeout={500}
          classNames="frame"
        >
          <Switch location={location}>
          {
            menuList.map((menuInfo, idx) => {
              const { exact, link, component } = menuInfo;
              return (
                <Route key={idx} exact={(exact)} path={link} component={component} />
              )
            })
          }
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);