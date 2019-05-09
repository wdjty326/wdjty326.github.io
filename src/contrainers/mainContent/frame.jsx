import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import * as Page from './page';
import '../../resources/mainContent/styles/Frame.css';


const mapStateToProps = state => state.common;

class Frame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuList: [],
    };

    
    console.log(Page);
    this.updateMenuList = this.updateMenuList.bind(this);
  }

  updateMenuList(props) {
    const { menuList } = props;
    this.setState({
      menuList: menuList.map(menuInfo => ({
        ...menuInfo,
        ...{
          component: null,
        }
      }))
    })
  }

  componentDidMount() {
    this.updateMenuList(this.props);
  }

  render() {
    const { menuList } = this.props;
    return (
      <div className="frame">
        {
          menuList.map((menuInfo, idx) => {
            const { exact, link } = menuInfo;
            return (
              <Route exact={(exact)} path={link} />
            )
          })
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(Frame);