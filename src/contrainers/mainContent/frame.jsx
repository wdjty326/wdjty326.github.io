import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
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
    const { menuList } = this.state;
    return (
      <div className="frame">
        {
          menuList.map((menuInfo, idx) => {
            const { exact, link, component } = menuInfo;
            return (
              <Route key={idx} exact={(exact)} path={link} component={component} />
            )
          })
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(Frame);