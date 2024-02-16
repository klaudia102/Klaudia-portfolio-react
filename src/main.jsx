import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter}from 'react-router-dom'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
