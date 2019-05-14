import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './page';

const mapStateToProps = state => state.common;

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
    };

    this.updateMenuList = this.updateMenuList.bind(this);
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
    this.updateMenuList(this.props);
  }

  render() {
    const { location } = this.props;
    const { menuList } = this.state;
    return (
      <TransitionGroup
        className="frame"
        component="div"
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
    );
  }
}

export default connect(mapStateToProps)(Frame);