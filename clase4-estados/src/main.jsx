import React from 'react'
import ReactDOM from 'react-dom/client'
import { Contador } from './components/Contador'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contador value={0} />
  </React.StrictMode>,
)
