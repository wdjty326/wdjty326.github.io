import React from 'react';
import ListItem from './listItem';
import ExpansionItem from './expansionItem';

const ITEM_PADDING = 16;
export default (() => {
  return class AnimateItem extends React.Component {
    constructor(props) {
      super(props);
      this.expandHeight = 0;
      this.animateItemRef = React.createRef();
    }

    componentDidMount() {
      const { scrollHeight } = this.animateItemRef.current;
      if (this.expandHeight === 0) {
        this.expandHeight = scrollHeight - ITEM_PADDING;
      }
    }

    componentDidUpdate() {
      const { isExpansion } = this.props;
      const { current } = this.animateItemRef;
      const { scrollHeight } = current;
      const styleHeight = `height:${(isExpansion) ? scrollHeight - ITEM_PADDING : this.expandHeight}`;
      current.style = `${styleHeight}`;
      
      setTimeout(() => {
        current.style = `${styleHeight}`;
      }, 300);
    }
    
    render() {
      const {
        id,
        isExpansion,
        toggleExpansionItem,
      } = this.props;
      return (
        <div
          className={isExpansion ? "expansion-item" : "list-item"}
          role="presentation"
          ref={this.animateItemRef}
          onClick={() => toggleExpansionItem(isExpansion ? null : id)}
        >
          {
            (isExpansion) ? 
            (
              <ExpansionItem
                {...this.props}
              />
            ) : (
              <ListItem
                {...this.props}
              />
            )
          }
        </div>
      )
    }
  };
})();