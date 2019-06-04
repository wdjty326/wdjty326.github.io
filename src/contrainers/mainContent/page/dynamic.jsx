import React from 'react';

export class DynamicImport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null
    };
  }
  componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

export const Loading = () => (
  <div id="loading">
    <h1>Loading...</h1>
  </div>
);