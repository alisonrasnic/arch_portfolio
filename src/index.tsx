import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router";

import {Desktop} from './KDEDesktop/Desktop';
import './App.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Desktop/>} />
      </Routes>
    </HashRouter>
  );
}
