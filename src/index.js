import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// コンテナの取得
const container = document.getElementById('root');
// createRoot を生成し、レンダリングする
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 