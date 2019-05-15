import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../../store/actions/commonAction';

const mapStateToProps = state => state.common;
const mapDispathToProps = (dispatch) => ({
  getProjectList: () => dispatch(action.getMenuList()),
});

class Project extends React.Component {
  constructor(props) {
    super(props);
    props.getProjectList();
  }
  render() {
    return (
      <div className="project">
        {/* 카드뷰 형식 개발 */}
        <div>
          {/* list 뷰 */}
          <div>
            <div>
              {/* 이미지 */}
            </div>
            <div>
              <span>{/* title */}</span>
            </div>
          </div>
          {/* 상세뷰 inline */}
          <div>
            <div>
              {/* 이미지 */}
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispathToProps)(Project);