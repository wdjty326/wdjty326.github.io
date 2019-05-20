import React from 'react';
import { connect } from 'react-redux';
import Slot from './common/slot';
import * as action from '../../../store/actions/commonAction';
import './future.scss';

const mapStateToProps = state => state.common;
const mapDispathToProps = dispatch => ({
  getFutureList: () => dispatch(action.getFutureList())
});

class Future extends React.Component {
  constructor(props) {
    super(props);
    props.getFutureList();
  }
  render() {
    const { futureList } = this.props;
    return (
      <article className="future">
        <div>
          <span>I want to be a global developer</span>
        </div>
        <div>
          {
            futureList.map((future, idx) => (
              <Slot
                key={idx}
                {...future}
              />
            ))
          }
        </div>
      </article>
    )
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Future);