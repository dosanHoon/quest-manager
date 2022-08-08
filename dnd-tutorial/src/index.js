import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { observe } from './components/Game';
import Board from './components/Board';

const root = ReactDOM.createRoot(document.getElementById('root'));

observe((knightPosition) =>

  root.render(
    <React.StrictMode>
      <Board knightPosition={knightPosition} />
    </React.StrictMode>
  )
)





reportWebVitals();
