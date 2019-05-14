import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as action from '../../../store/actions/commonAction';
import './technology.scss';

const TechnologyElement = ({icon, title, content}) => (
  <div>
    <FontAwesomeIcon icon={icon} />
    <span>{title}</span>
    <ul>
    {
      content.map(text => (<li>{text}</li>))
    }
    </ul>
  </div>
);

const mapStateToProps = state => state.common;
const mapDispatchToProps = (dispatch) => ({
  getTechnologyList: () => dispatch(action.getTechnologyList()),
});
class Technology extends React.Component {
  constructor(props) {
    super(props);
    props.getTechnologyList();
  }

  render() {
    const { technologyList } = this.props;

    return (
      <div className="technology">
        <div>
          {
            technologyList.map(technology => <TechnologyElement key={technology.id} {...technology} />)
          }
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Technology);