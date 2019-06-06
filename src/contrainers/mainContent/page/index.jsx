import React from 'react';
import { DynamicImport, Loading } from './dynamic';

const Home = props => <DynamicImport load={() => import('./home')} {...props} />;
const Technology = props => <DynamicImport load={() => import('./technology')} {...props} />;
const Project = props => <DynamicImport load={() => import('./project')} {...props} />;
const Future = props => <DynamicImport load={() => import('./future')} {...props} />;

const Etc = props => (
  <DynamicImport load={() => import('./etc')}>
    {
      Component => (Component === null)
        ? <Loading />
        : <Component {...props} />
    }
  </DynamicImport>
);

export default ({
  Home,
  Technology,
  Project,
  Future,
  Etc,
});
