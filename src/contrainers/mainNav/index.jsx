// 좌측 메뉴바
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuItem from './menuItem';
import '../../resources/mainNav/styles/mainNav.scss';

const mapStateToProps = state => state.common;

class MainNav extends PureComponent {
  render() {
    const { menuList, location } = this.props;
    const { pathname } = location;
    return (
      <nav id="MainNav">
        <ul>
          {
            menuList.map((menuInfo, idx) => (
              <MenuItem
                key={idx}
                {...menuInfo}
                active={pathname === menuInfo.link}
              />
            ))
          }
        </ul>
      </nav>
    );
  }
}

MainNav.propTypes = {
  menuList: PropTypes.arrayOf(Object),
  location: PropTypes.objectOf({
    pathname: PropTypes.string,
  }),
};

MainNav.defaultProps = {
  menuList: [],
  location: {
    pathname: '',
  },
};

export default connect(mapStateToProps, null)(MainNav);
