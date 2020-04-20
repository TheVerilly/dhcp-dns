import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import './assets/index.css';

import App from './App';

const appContainer = (
    <StrictMode>
        <App />
    </StrictMode>
);

ReactDOM.render(appContainer, document.getElementById('root'));
