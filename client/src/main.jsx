import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthContext,AuthProvider} from './Store/auth.jsx'

//wrapping our main component with context to access all context data to their user
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
    {/*child component*/}
        <App />
    </React.StrictMode>
  </AuthProvider>
)
