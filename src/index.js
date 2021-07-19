import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './app.jsx';


const Main = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));

