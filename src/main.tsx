import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'admin-lte/dist/css/adminlte.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'admin-lte/dist/js/adminlte.min.js'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
