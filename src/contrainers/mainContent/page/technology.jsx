import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slot from './common/slot';
import * as action from '../../../store/actions/commonAction';
import '../../../resources/mainContent/styles/page/technology.scss';

const mapStateToProps = state => state.common;
const mapDispatchToProps = dispatch => ({
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
      <article className="technology">
        {
          technologyList.map(technology => (
            <Slot
              key={technology.id}
              {...technology}
            />
          ))
        }
      </article>
    );
  }
}

Technology.propTypes = {
  technologyList: PropTypes.arrayOf(Object),
  getTechnologyList: PropTypes.func,
};

Technology.defaultProps = {
  technologyList: [],
  getTechnologyList: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Technology);
