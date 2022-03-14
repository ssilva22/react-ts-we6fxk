import React from 'react';
import { render } from 'react-dom';
import Instructions from './Instructions';
import './style.css';

const App = () => <Instructions />;
render(<App />, document.getElementById('root'));
