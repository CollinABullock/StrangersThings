import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
// import './Fonts/StangerThings/Benguiat-Bold';6

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
