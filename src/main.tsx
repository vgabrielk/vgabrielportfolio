import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../global.scss'
import 'pure-react-carousel/dist/react-carousel.es.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
