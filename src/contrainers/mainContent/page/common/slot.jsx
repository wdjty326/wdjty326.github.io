import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default ({icon, imagesrc, title, content, style}) => {
  const image = (imagesrc) && require(`../../../../resources/mainContent/images/${imagesrc}`);
  return (
    <div style={style}>
      <div>
        {
          (icon) ? (
            <FontAwesomeIcon icon={icon} />
          ) : (image) ? (
            <img src={image} />
          ) : null
        }
        <span>{title}</span>
      </div>
      <div>
        <ul>
        {
          content.map(text => (<li>{text}</li>))
        }
        </ul>
      </div>
    </div>
  )
};