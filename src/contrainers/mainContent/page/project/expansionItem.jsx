import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 서브아이템
const SubItem = ({className, style, content}) => (
  <div className={(className) ? className: ''} style={style}>
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

// 확장형식 아이템
class expansionItem extends React.Component {
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
          </div>{/* 이미지 */}
          <div>{/* 타이틀 */}
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
    )
  }
}

export default expansionItem;