import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ContentProvider } from "./context/ContentContext.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.StrictMode>
      <ContentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContentProvider>    
    </React.StrictMode>
  </React.StrictMode>,
)
