import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //전역 CSS
import App from './App.jsx' //화면 메인 컴포넌트

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
