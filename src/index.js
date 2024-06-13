import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Box from './components/box';
import Boxes from './components/boxes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // 有这个标签会使得react初始化的时候会执行打印两次
    <Boxes></Boxes>
  // </React.StrictMode>
);