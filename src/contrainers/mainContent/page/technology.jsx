import React from 'react';
import { connect } from 'react-redux'; 
import Slot from './common/slot';
import * as action from '../../../store/actions/commonAction';
import './technology.scss';

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
              <Slot
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