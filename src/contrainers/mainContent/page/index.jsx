import React from 'react';
import { DynamicImport, Loading } from './dynamic';

const Home = (props) => (
  <DynamicImport load={() => import('./home')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
);

const Technology = (props) => (
  <DynamicImport load={() => import('./technology')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
);

const Project = (props) => (
  <DynamicImport load={() => import('./project')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
);

const Future = (props) => (
  <DynamicImport load={() => import('./future')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
);

const Etc = (props) => (
  <DynamicImport load={() => import('./etc')}>
    {(Component) => Component === null
      ? <Loading />
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