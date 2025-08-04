import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import App from './App.jsx'
import './index.css'
=======
import './index.css'
import App from './App.jsx'
>>>>>>> fdfe8fbe0f7550612e6ae87e2e6df3b3cc0c4af4

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
