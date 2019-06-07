import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

// 리스트형식 아이템
class ListItem extends PureComponent {
  render() {
    const {
      icon,
      title,
    } = this.props;
    return (
      <React.Fragment>
        <div>
          {/* 이미지 */}
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>
          {/* 타이틀 */}
          <span>{title}</span>
        </div>
      </React.Fragment>
    );
  }
}

ListItem.propTypes = {
  icon: PropTypes.objectOf(Object),
  title: PropTypes.string,
};

ListItem.defaultProps = {
  icon: null,
  title: '',
};

export default ListItem;
