import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class DynamicImport extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Component: null,
    };
  }

  componentDidMount() {
    const { load } = this.props;
    load().then((Component) => {
      this.setState(() => ({
        Component: Component.default ? Component.default : Component,
      }));
    });
  }

  render() {
    const { Component } = this.state;
    return (Component === null)
      ? <Loading />
      : <Component {...this.props} />;
  }
}

DynamicImport.propTypes = {
  load: PropTypes.instanceOf(Promise),
  // children: PropTypes.node,
};

DynamicImport.defaultProps = {
  load: new Promise(() => {}),
  // children: <div />,
};

export const Loading = () => (
  <div id="loading">
    <h1>Loading...</h1>
  </div>
);
