import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

// 서브아이템
const SubItem = ({ className, style, content }) => (
  <div className={className || ''} style={style}>
    {
      (typeof content === 'string') ? (
        <span>{content}</span>
      ) : (content instanceof Array) ? (
        content.map(str => (
          <span>{str}</span>
        ))
      ) : null
    }
  </div>
);

SubItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(Object),
  content: PropTypes.arrayOf(PropTypes.string),
};

SubItem.defaultProps = {
  className: '',
  style: {},
  content: [],
};

// 확장형식 아이템
class expansionItem extends PureComponent {
  render() {
    const {
      title,
      icon,
      description,
      technology,
      content,
    } = this.props;
    return (
      <React.Fragment>
        <div>
          <div>
            <FontAwesomeIcon icon={icon} />
          </div>
          {/* 이미지 */}
          <div>
            {/* 타이틀 */}
            <span>
              {title}
            </span>
          </div>
        </div>
        <div>
          <SubItem content={description} />
          <SubItem className="technology" content={technology} />
          <SubItem className="description" content={content} />
        </div>
      </React.Fragment>
    );
  }
}

expansionItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.objectOf(Object),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  technology: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

expansionItem.defaultProps = {
  title: '',
  icon: null,
  description: '',
  technology: '',
  content: '',
};

export default expansionItem;
