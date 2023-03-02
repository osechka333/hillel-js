import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { LangProvider } from './hooks/LangContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <LangProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </LangProvider>
)
