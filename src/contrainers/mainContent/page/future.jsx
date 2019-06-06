import React, { PureComponent } from 'react';
import '../../../resources/mainContent/styles/page/future.scss';

/**
 * React.Component 와 React.PureComponent 차이
 * Component의 경우 shouldComponentUpdate 가 선언되지 않은 경우 무조건 re-render 실행
 * PureComponent의 경우 state 및 props 의 변화가 있을때만 re-render 실행
 */
class Future extends PureComponent {
  render() {
    return (
      <article className="future">
        <h1>I want to be a global developer</h1>
      </article>
    );
  }
}

export default Future;
