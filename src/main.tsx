import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StyleSystemProvider } from "@architecture-it/stylesystem"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleSystemProvider>
      <App />
    </StyleSystemProvider>
    
  </React.StrictMode>,
)

export default App;
