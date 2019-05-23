import React from 'react';

export default (() => {
  return (() => {
    let scrollHeight = 0;
    const style = {
      overflow: 'hidden',
      transition: 'height .3s ease-in'
    };
    return class AnimateItem extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          style,
        };
        this.animateItemRef = React.createRef();
        this.updateScrollHeight = this.updateScrollHeight.bind(this);
      }
      componentDidMount() {
        console.log(scrollHeight);
        this.setState({
          style: this.updateScrollHeight(),
        }, () => {
          const { current } = this.animateItemRef;
          scrollHeight = current.scrollHeight;
          this.setState({
            style: this.updateScrollHeight(),
          });
  
          setTimeout(() => {
            this.setState({
              style
            });
          }, 300)
        });
      }
  
      updateScrollHeight() {
        const { current } = this.animateItemRef;
        const { style } = this.state;
        scrollHeight = (scrollHeight) ? scrollHeight : current.scrollHeight;
        return { ...style, ...{ height: scrollHeight }};
      }
  
      render() {
        const { style } = this.state;
        return (
          <div
            ref={this.animateItemRef}
            {...this.props}
          />
        )
      }
    };
  })();
})();