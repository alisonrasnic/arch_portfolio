import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";

import App from './App';
import {Desktop} from './KDEDesktop/Desktop';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
				<Route path="/home" element ={<Desktop/>} />
      </Routes>
    </BrowserRouter>
  );
}
