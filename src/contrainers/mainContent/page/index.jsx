import React from 'react';

class DynamicImport extends React.Component {
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
const Home = (props) => (
  <DynamicImport load={() => import('./home')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);

const Technology = (props) => (
  <DynamicImport load={() => import('./technology')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);

const Project = (props) => (
  <DynamicImport load={() => import('./project')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);

const Future = (props) => (
  <DynamicImport load={() => import('./future')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);

const Etc = (props) => (
  <DynamicImport load={() => import('./etc')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);

export default ({
  Home,
  Technology,
  Project,
  Future,
  Etc,
});