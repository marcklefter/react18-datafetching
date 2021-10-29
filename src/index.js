import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { App } from './App';

// ...

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

// ...
// Enable concurrent features.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);