import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import List from './pages/todolist'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/todolist" element={<List/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
