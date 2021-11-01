import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //pega de index.html, dentro daqui que joga todo nosso react, basicamente pra isso que serve a pasta public
);

