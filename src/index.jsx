import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faDesktop, faComments, faGraduationCap, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faStripeS, faFacebookF, faGithub, faJs, faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import Main from './contrainers/main';
import './index.css';

library.add(faHome);
library.add(faDesktop);
library.add(faComments);
library.add(faGraduationCap);
library.add(faStripeS);
library.add(faFacebookF);
library.add(faGithub);
library.add(faJs);
library.add(faReact);
library.add(faLeaf);
library.add(faHtml5);


const root = document.getElementById('root');
ReactDOM.render(<Main />, root);