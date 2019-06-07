/* eslint-disable global-require */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Card = (icon, image, title, content, style) => (
  <div style={style}>
    <div>
      {
        (icon) ? <FontAwesomeIcon icon={icon} /> : <img src={image} />
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
);

class Slot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
    };
  }

  componentDidMount() {
    const {
      imagename,
    } = this.props;
    if (imagename) {
      import(`../../../../resources/mainContent/images/${imagename}`).then((image) => {
        this.setState({
          image,
        });
      });
    }
  }

  render() {
    const { image } = this.state;
    const {
      icon,
      title,
      content,
      style,
    } = this.props;

    return (icon || image) ? Card(icon, image, title, content, style) : null;
  }
}

Slot.propTypes = {
  icon: PropTypes.objectOf(Object),
  imagename: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  style: PropTypes.objectOf(Object),
};

Slot.defaultProps = {
  icon: null,
  imagename: null,
  title: '',
  content: '',
  style: {},
};

export default Slot;
