import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);