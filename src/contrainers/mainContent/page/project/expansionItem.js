import React from 'react';
// 확장형식 아이템
class expansionItem extends React.Component {
  render() {
    return (
      <div className="expansition-item">
        <div>{/* 이미지 */}</div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}

export default expansionItem;