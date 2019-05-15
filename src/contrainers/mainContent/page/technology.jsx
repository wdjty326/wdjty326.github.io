import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as action from '../../../store/actions/commonAction';
import './technology.scss';

const TechnologyElement = ({icon, title, content, style}) => (
  <div style={style}>
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
            technologyList.map((technology, idx) => (
              <TechnologyElement
                key={technology.id}
                style={({
                  '--element-index': idx + 1,
                })}
                {...technology}
              />
            ))
          }
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Technology);